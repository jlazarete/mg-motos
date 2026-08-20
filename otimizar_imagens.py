"""
Tratamento das fotos reais do cliente (fachada, bancada, equipe) para uso no site
e no Google Meu Negocio: redimensiona, comprime, gera webp, recorta og-image e
injeta EXIF com palavras-chave de SEO local.

Uso: colocar a foto original em assets/img/raw/ e rodar `python otimizar_imagens.py`.
"""
import os
import sys

try:
    from PIL import Image
    import piexif
except ImportError:
    print("Dependencias nao encontradas. Execute: pip install Pillow piexif")
    sys.exit(1)

PASTA_RAW = "assets/img/raw"
PASTA_SAIDA = "assets/img"

TITULO = "MG Motos - Pecas e Servicos - Jardim Japao"
DESCRICAO = (
    "Fachada da oficina MG Motos, Av. das Cerejeiras 34, Jardim Japao, "
    "Zona Norte de Sao Paulo. Mecanica geral de motos, pecas e servicos."
)
KEYWORDS = (
    "oficina de moto jardim japao; mecanica de moto zona norte; mg motos; "
    "av das cerejeiras; pecas e servicos moto; sao paulo"
)
ARTISTA = "MG Motos - Pecas e Servicos"


def utf16(texto):
    """Tags XP do Windows (lidas por indexadores) exigem UTF-16LE."""
    return texto.encode("utf-16le")


def montar_exif():
    exif_dict = {"0th": {}, "Exif": {}, "GPS": {}, "1st": {}, "Interop": {}}
    exif_dict["0th"][piexif.ImageIFD.ImageDescription] = DESCRICAO.encode("utf-8")
    exif_dict["0th"][piexif.ImageIFD.Artist] = ARTISTA.encode("utf-8")
    exif_dict["0th"][piexif.ImageIFD.Software] = b"Otimizador SEO Local - MG Motos"
    exif_dict["0th"][40091] = utf16(TITULO)      # XPTitle
    exif_dict["0th"][40092] = utf16(DESCRICAO)   # XPComment
    exif_dict["0th"][40094] = utf16(KEYWORDS)    # XPKeywords
    return piexif.dump(exif_dict)


def salvar_jpeg(img, caminho, largura_max, exif_bytes, qualidade=82):
    copia = img.copy()
    copia.thumbnail((largura_max, largura_max * 10), Image.Resampling.LANCZOS)
    copia.save(caminho, "JPEG", quality=qualidade, optimize=True, exif=exif_bytes)
    print(f"[OK] {caminho} ({copia.size[0]}x{copia.size[1]}, {os.path.getsize(caminho)//1024} KB)")


def salvar_webp(img, caminho, largura_max, qualidade=78):
    copia = img.copy()
    copia.thumbnail((largura_max, largura_max * 10), Image.Resampling.LANCZOS)
    copia.save(caminho, "WEBP", quality=qualidade)
    print(f"[OK] {caminho} ({copia.size[0]}x{copia.size[1]}, {os.path.getsize(caminho)//1024} KB)")


def gerar_og_image(img, caminho, exif_bytes):
    # Recorte 1200x630 (padrao Open Graph) focado no letreiro da fachada,
    # nao no centro geometrico da foto em pe.
    largura, altura = img.size
    caixa = (0, 160, largura, 160 + 630) if altura >= 790 else (0, 0, largura, min(altura, 630))
    recorte = img.crop(caixa)
    if recorte.size[1] != 630:
        recorte = recorte.resize((recorte.size[0], 630), Image.Resampling.LANCZOS)
    if recorte.size[0] > 1200:
        recorte.thumbnail((1200, 630), Image.Resampling.LANCZOS)
    recorte.save(caminho, "JPEG", quality=85, optimize=True, exif=exif_bytes)
    print(f"[OK] {caminho} ({recorte.size[0]}x{recorte.size[1]}, {os.path.getsize(caminho)//1024} KB)")


def processar():
    if not os.path.isdir(PASTA_RAW):
        print(f"Pasta '{PASTA_RAW}' nao existe. Coloque a foto original la e rode de novo.")
        return

    arquivos = [f for f in os.listdir(PASTA_RAW) if f.lower().endswith((".jpg", ".jpeg", ".png"))]
    if not arquivos:
        print(f"Nenhuma imagem em '{PASTA_RAW}'.")
        return

    exif_bytes = montar_exif()

    for arquivo in arquivos:
        caminho_raw = os.path.join(PASTA_RAW, arquivo)
        nome_base = os.path.splitext(arquivo)[0]
        if "fachada" in nome_base.lower():
            nome_saida = "fachada-mg-motos-jardim-japao"
        else:
            nome_saida = nome_base

        with Image.open(caminho_raw) as img:
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")

            salvar_jpeg(img, os.path.join(PASTA_SAIDA, f"{nome_saida}.jpg"), 800, exif_bytes)
            salvar_webp(img, os.path.join(PASTA_SAIDA, f"{nome_saida}.webp"), 800)

            if "fachada" in nome_base.lower():
                gerar_og_image(img, os.path.join(PASTA_SAIDA, "og-image.jpg"), exif_bytes)

    print("\nFinalizado. Fotos web-ready em assets/img/, originais preservados em assets/img/raw/.")


if __name__ == "__main__":
    processar()

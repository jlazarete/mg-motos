<h1 align="center">MG Motos</h1>

<p align="center">
  <strong>Site institucional estatico com foco em SEO Local e Google Meu Negocio para a oficina MG Motos - Pecas e Servicos.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Markup-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS-Estilo-1572B6?style=for-the-badge&logo=css&logoColor=white" alt="CSS" />
  <img src="https://img.shields.io/badge/JavaScript-Interatividade-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-Deploy-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages" />
</p>

---

## Sobre o projeto

Site de pagina unica (one page) para a oficina MG Motos, localizada no Jardim Japao, Zona Norte de Sao Paulo. Construido em HTML/CSS/JS puro, sem dependencias e sem build step, pronto para hospedagem gratuita no GitHub Pages.

Foco do projeto:

- **SEO Local**: meta tags de geolocalizacao, dados estruturados (schema.org `AutoRepair`) e conteudo alinhado as buscas de bairro ("oficina de moto jardim japao", "mecanica de moto zona norte").
- **Conversao direta**: botao de WhatsApp fixo e centralizado, sem cobranca antecipada no site — o fechamento acontece na conversa.
- **Leveza**: nenhuma dependencia externa alem de fontes do Google Fonts. Carregamento rapido em conexao 3G/4G.

## Estrutura

```
index.html          pagina principal (conteudo + SEO + schema.org)
styles.css          design system (paleta da marca: preto, vermelho, amarelo)
script.js           WhatsApp/telefone centralizados em uma unica config
otimizar_imagens.py trata fotos reais recebidas do cliente (resize, webp, og-image, EXIF SEO)
assets/img/         hero usa foto de moto (banco de imagens); fachada tratada fica em og-image.jpg e reservada para o Google Meu Negocio; raw/ guarda os originais dos clientes (fora do Git)
_headers            cache HTTP e headers de seguranca (referencia; nao tem efeito no GitHub Pages, so em Netlify)
CNAME               dominio custom do GitHub Pages
```

## Como rodar localmente

Nao ha build step. Basta abrir o `index.html` no navegador, ou subir um servidor estatico simples:

```bash
npx serve .
```

## Deploy no GitHub Pages

Publicado desde 2026-08-21 em `https://www.mgmotospecas.com.br/` via GitHub Pages
(branch `main`, raiz `/`). O repositorio `jlazarete/mg-motos` precisou virar publico:
GitHub Pages em conta gratuita nao publica repositorio privado. Nada no codigo ou no
historico e mais sensivel do que o que ja e publico no proprio site (endereco,
telefone, CNPJ fazem parte do SEO local por natureza).

**Por que GitHub Pages e nao Netlify**: o site rodou algumas horas na Netlify em
2026-08-21, mas a Netlify lancou nesse mesmo dia um sistema de visibilidade de
projeto que exibe um badge "Powered by Netlify" em todo projeto publico, sem opcao
de tirar sem virar privado (inviavel, o site precisa ser publico) ou pagar por um
plano cuja documentacao nao confirma remover o badge. Avaliado Vercel Hobby como
alternativa e descartado: os termos de servico proibem uso comercial, incluindo
projeto feito por consultor pago (este caso), com risco de o site ser desligado
sem aviso. GitHub Pages ficou sem equivalente ao `_headers` da Netlify (perdeu os
headers de seguranca/cache HTTP que tinham sido aplicados), mas e gratuito, sem
badge, sem risco de ToS — troca aceita porque esses headers sao reforco extra
(defesa em profundidade), nao a protecao que resolve algo real pro site funcionar.

Configuracao feita via `gh api` (repo publico, Pages habilitado, dominio custom) e
arquivo `CNAME` na raiz apontando pro `www.mgmotospecas.com.br`. DNS: 4 registros A
no apex (`185.199.108.153` a `.111.153`) e 1 CNAME de `www` pro `jlazarete.github.io`,
configurados no DNS da Netlify (nameservers ja delegados la desde o apontamento do
dominio proprio, usado so como DNS puro agora, nao como host).

Pra clonar este processo num cliente novo do zero:

```bash
git init
git add .gitignore index.html styles.css script.js README.md docs
git commit -m "feat: site institucional da mg motos com seo local"
git branch -M main
git remote add origin <url-do-repositorio-no-github>
git push -u origin main
gh repo edit <usuario>/<repo> --visibility public --accept-visibility-change-consequences
gh api -X POST repos/<usuario>/<repo>/pages -f "source[branch]=main" -f "source[path]=/"
```

Sem dominio proprio, o site fica em `https://<usuario>.github.io/<repositorio>/`.

## Pendencias que dependem do cliente (MG Motos)

Antes de considerar o site pronto para publicar, confirmar com o cliente:

- [x] **Foto da fachada** recebida e tratada (`otimizar_imagens.py`: resize, webp, recorte de og-image, EXIF com palavras-chave locais). Decisao do cliente: essa foto **nao** vai no hero do site — fica reservada para o perfil do Google Meu Negocio (e como `og-image.jpg`/preview de compartilhamento). Original preservado em `assets/img/raw/` (fora do Git).
- [x] **Foto do hero** — o cliente pediu uma moto (Honda Hornet vermelha, angulo frontal-diagonal) para casar com a identidade do flyer, em vez da foto da fachada. Usada `assets/img/moto-hornet-mg-motos.jpg`/`.webp`, foto de banco de imagens (Unsplash, licenca livre para uso comercial, credito: Jonath Jo). Se o cliente mandar a foto oficial da moto do flyer depois, e so substituir esses dois arquivos.
- [ ] **Fotos da bancada de servico e da equipe** — pendentes; basta colocar em `assets/img/raw/` e rodar `python otimizar_imagens.py` de novo.
- [ ] **Horario de atendimento** exato (o schema.org esta com um horario placeholder de segunda a sabado, 08h-18h, que precisa ser confirmado ou corrigido).
- [x] **Nome oficial da rua**: confirmado com o cliente como "Av. das Cerejeiras, 34" — mesmo formato que ja aparecia no registro do Google Maps para esse endereco (perfil da barbearia anterior). Site atualizado.
- [ ] **Perfil do Google Meu Negocio criado em 2026-08-21** (conta dedicada `mgmotospecasservicos@gmail.com`, nao a pessoal do Lazarete: proximo comercio de bairro repete o mesmo padrao, sem misturar clientes numa conta so). Categoria "Oficina mecanica de motos", endereco, telefone, site, descricao, 8 servicos e foto de capa (fachada) preenchidos. Nome "MG Motos" confirmado batendo com a placa real, visivel na propria foto da fachada. **Falta a verificacao** (perfil fica "Nao visivel publicamente" ate isso): opcoes oferecidas foram telefone do cliente (SMS/ligacao, precisa de alguem com acesso a esse numero na hora) ou video da fachada/interior (precisa ir ao local); e-mail em `@mgmotospecas.com.br` nao funciona, dominio nao tem caixa de e-mail configurada. Depois de verificado, linkar o perfil no site como `sameAs` no schema.org.
- [x] **Dominio proprio**: registrado em 2026-08-20 — `mgmotospecas.com.br`. `canonical`, `og:image`/`og:url` e schema.org atualizados para `https://www.mgmotospecas.com.br/`. `robots.txt` e `sitemap.xml` criados apontando para esse dominio. DNS apontado e site publicado em 2026-08-21 (ver secao de Deploy).

## Status do Projeto (Kanban / Checklist)

### Concluido
- [x] Estrutura base do site (HTML/CSS/JS) com conteudo extraido da arte promocional do cliente.
- [x] SEO local: meta tags, Open Graph, dados estruturados schema.org (`AutoRepair`).
- [x] Botao de WhatsApp fixo + CTAs, numero centralizado em `script.js`.
- [x] Mapa incorporado (Google Maps embed) com o endereco do cliente.
- [x] `.gitignore` cobrindo segredos e dependencias.

### Em andamento
- [ ] Validacao visual do site num navegador real (mobile + desktop).

### A Fazer
- [x] Receber foto da fachada e rodar o pipeline de otimizacao (`otimizar_imagens.py`).
- [ ] Receber fotos da bancada de servico e da equipe e rodar o mesmo pipeline.
- [ ] Confirmar horario de atendimento e ajustar `openingHoursSpecification`.
- [x] Confirmar NAP exato (nome da rua) junto ao Google Meu Negocio do cliente — "Av. das Cerejeiras, 34".
- [x] Criar/registrar dominio proprio — `mgmotospecas.com.br` (2026-08-20).
- [x] Deploy e apontamento de DNS do dominio proprio — GitHub Pages, 2026-08-21.
- [ ] Criar perfil do Google Meu Negocio — feito em 2026-08-21, falta verificar (telefone do cliente ou video da fachada).


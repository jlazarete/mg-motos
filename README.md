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
index.html      pagina principal (conteudo + SEO + schema.org)
styles.css      design system (paleta da marca: preto, vermelho, amarelo)
script.js       WhatsApp/telefone centralizados em uma unica config
assets/img/     fotos reais do negocio (fachada, servicos, equipe) — pendente
docs/           documentacao de apoio (oferta replicavel, etc.)
```

## Como rodar localmente

Nao ha build step. Basta abrir o `index.html` no navegador, ou subir um servidor estatico simples:

```bash
npx serve .
```

## Deploy no GitHub Pages

```bash
git init
git add .gitignore index.html styles.css script.js README.md docs
git commit -m "feat: site institucional da mg motos com seo local"
git branch -M main
git remote add origin <url-do-repositorio-no-github>
git push -u origin main
```

Depois, no GitHub: **Settings > Pages > Branch: main /(root)** e salvar. O site fica no ar em `https://<usuario>.github.io/<repositorio>/`.

## Pendencias que dependem do cliente (MG Motos)

Antes de considerar o site pronto para publicar, confirmar com o cliente:

- [ ] **Fotos reais** da fachada, bancada de servico e equipe (a skill de automacao de imagens para GMN roda assim que as fotos chegarem: dedup por hash visual, EXIF com palavras-chave locais, renomeacao semantica).
- [ ] **Horario de atendimento** exato (o schema.org esta com um horario placeholder de segunda a sabado, 08h-18h, que precisa ser confirmado ou corrigido).
- [ ] **Nome oficial da rua**: o registro postal usa "Avenida das Cerejeiras"; o material de divulgacao usa "Av. Cerejeiras". Confirmar qual versao esta cadastrada no Google Meu Negocio para manter o NAP (Nome/Endereco/Telefone) identico em todo lugar — isso importa para SEO local.
- [ ] **Link do perfil do Google Meu Negocio** (para linkar no site e citar como `sameAs` no schema.org).
- [ ] **Dominio proprio** (opcional) — hoje o `canonical` no `index.html` aponta para um dominio placeholder (`mgmotos.com.br`) que precisa ser ajustado ou removido se nao houver dominio.

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
- [ ] Receber fotos reais do cliente e rodar o pipeline de otimizacao para GMN.
- [ ] Confirmar horario de atendimento e ajustar `openingHoursSpecification`.
- [ ] Confirmar NAP exato (nome da rua) junto ao Google Meu Negocio do cliente.
- [ ] Criar/registrar dominio proprio (se o cliente quiser sair do `github.io`).
- [ ] Deploy no GitHub Pages.

---

## Documentacao de Apoio Operacional

Material complementar sobre como este projeto se encaixa na oferta de servicos:

- [Central de Documentacao (Indice Geral)](docs/README.md)
- [Oferta Replicavel para Oficinas e Comercios de Bairro](docs/oferta-replicavel-oficinas.md)

# Oferta Replicável para Oficinas e Comércios de Bairro

---
<p align="center">
  <a href="../README.md">Início</a> •
  <a href="README.md">Índice Geral</a> •
  <strong>Oferta Replicável</strong>
</p>

---

Este documento pega o projeto da MG Motos como caso-base e responde uma pergunta diferente: como transformar "fazer um site GMN com SEO local" numa oferta que se repete, em vez de um trabalho artesanal único por cliente. Segue o Framework SO-1P (Vertical × Máquina × Precificação), aplicado de forma enxuta — sem repetir a validação de nicho do zero, porque o nicho já tem evidência real: a MG Motos é o primeiro caso.

## 1. Nicho: comércio de bairro com atendimento local (oficinas e prestadores de serviço)

A MG Motos já serve como evidência dos 4 critérios:

- **Repetição de processo**: toda oficina/prestador de bairro precisa do mesmo pacote básico (site + SEO local + GMN + WhatsApp). A estrutura de conteúdo muda pouco entre um cliente e outro.
- **Gargalo visível**: esses negócios existem fisicamente há anos, têm clientela de bairro, mas não aparecem em buscas "perto de mim" — perdem cliente novo para quem tem presença digital melhor, não para quem presta serviço melhor.
- **Potencial econômico**: baixo por cliente individual (ver seção de precificação abaixo), mas alto em volume — existem dezenas de milhares de pequenos comércios de bairro só na Zona Norte de São Paulo.
- **Capacidade de pagamento**: é o ponto fraco real do nicho (ver seção 3). Isso não invalida o nicho, mas define que o modelo de venda precisa ser produtizado e de baixo custo marginal, não uma consultoria bespoke cara.

## 2. A máquina: o que já é reutilizável

O trabalho técnico feito para a MG Motos já é, na prática, o núcleo da infraestrutura:

| Frente | O que já está pronto (automatizado) | O que continua manual (curado) |
|---|---|---|
| **Oferta** | Template de site (design system, estrutura HTML/CSS/JS) e checklist de conteúdo | Ajuste de paleta/tom para a marca de cada cliente |
| **Aquisição** | — | Indicação e prospecção local; a MG Motos vira o primeiro case de prova social |
| **Vendas** | Tabela de precificação replicável (seção 3) | Conversa de fechamento e ajuste fino do escopo |
| **Entrega** | Skill `local-business-booster`: gera site, SEO local, schema.org, `.gitignore`, README com Kanban | Coleta de dados do cliente (endereço, serviços, telefone, Instagram) |
| **Operação** | Pipeline Python de imagens (dedup por hash visual, EXIF com palavras-chave locais, slug SEO) quando o cliente manda fotos | Triagem de quais fotos usar; revisão final antes do deploy |

O ganho real de produtizar isso: o custo marginal de atender o próximo cliente cai bastante, porque a maior parte do trabalho (estrutura, SEO, schema, deploy) já está resolvida como template — o que resta é coleta de informação e ajuste, não construção do zero.

## 3. Precificação: por que este nicho pede um modelo diferente do bespoke

Aplicando a lógica de valor gerado (setup 8-10% do valor gerado anual, recorrência 10-20% do setup) a um cliente típico deste nicho:

```
Estimativa conservadora (a validar com o piloto real da MG Motos):
Clientes novos/mes atribuiveis a melhor presença local: 4 a 8
Ticket medio de servico (moto, blended): R$ 150 a R$ 190
Valor mensal destravado: R$ 600 a R$ 1.500
Valor gerado anual: R$ 7.200 a R$ 18.000

Setup (piso 8%, primeiro piloto no nicho, sem case ainda): R$ 576 a R$ 1.440
Recorrencia (piso 10% do setup): R$ 58 a R$ 144/mes
```

**O número honesto**: esse valor gerado é real, mas baixo em termos absolutos — bem diferente de um cliente B2B onde a mesma lógica gera setups de dezenas de milhares de reais. Isso não é motivo para inflar a estimativa (o passo 4 da skill de precificação existe exatamente para isso: se o cliente típico do nicho não sustenta o preço calculado, o problema é de modelo, não de coragem para cobrar mais).

**A saída não é cobrar mais por cliente — é ter custo marginal baixo por cliente.** Como a "máquina" da seção 2 já resolve a maior parte do trabalho, um setup modesto ainda é viável em volume. Proposta de menu produtizado (preço fixo, não sob medida):

| Pacote | O que inclui | Setup sugerido | Recorrência |
|---|---|---|---|
| **Presença Local** | Site 1 página + SEO local + schema.org + WhatsApp | R$ 700 – R$ 900 | — |
| **Presença Local + Fotos GMN** | O pacote acima + pipeline de otimização de fotos para Google Meu Negócio | R$ 900 – R$ 1.400 | — |
| **Presença Local + Monitoramento** | Qualquer um dos pacotes acima + acompanhamento mensal (avaliações do Google, atualização sazonal de horário/fotos, pequenos ajustes) | igual aos acima | R$ 100 – R$ 200/mês |

**Bônus por performance**: não recomendado para este ticket. Medir atribuição com precisão (quantos clientes vieram do site vs. já eram da região) é caro e impreciso num comércio pequeno sem CRM — o custo de operar o bônus supera o ganho.

## 4. Riscos reais deste modelo

- **Payback lento por cliente individual.** Setup de R$ 700-1.400 não sustenta prospecção fria cara. O canal de aquisição tem que ser barato: indicação, redes de bairro, associações comerciais — não anúncio pago ou outbound intenso.
- **Sozinho, o volume tem teto.** Mesmo com o template pronto, cada cliente ainda exige coleta de conteúdo e um ciclo de aprovação. Definir de antemão quantos projetos simultâneos cabem sem fila (ex.: mais de 3-4 projetos "em andamento" ao mesmo tempo é sinal para desacelerar aquisição, não para contratar ajuda ainda).
- **LGPD**: mesmo um site simples registra dados de contato do cliente final (quem manda mensagem no WhatsApp). Não é o mesmo nível de risco de um sistema com banco de dados, mas vale uma cláusula simples no contrato sobre isso.
- **Risco de subprecificar por medo de "é só um site".** A tabela acima já reflete um preço enxuto adequado ao nicho — não é recomendado descer abaixo do piso calculado só porque parece "simples" de fazer; o valor não está no HTML, está no resultado (aparecer na busca local).

## 5. Ação concreta para hoje

Fechar a MG Motos como cliente-piloto documentado: usar o preço de piloto (piso da tabela, ex. R$ 700 no pacote "Presença Local") em troca de autorização explícita para usar o case (nome, prints do site no ar, resultado real depois de medido) como prova social nas próximas conversas de venda do mesmo pacote a outros comércios de bairro.

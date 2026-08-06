// Dado sensivel centralizado em um unico lugar: nunca duplicar o numero no HTML.
const CONFIG = {
  telefone: '+5511937297463',
  mensagemPadrao: 'Ola! Vim pelo site da MG Motos e gostaria de um orcamento.',
};

function formatarTelefoneExibicao(numero) {
  const digitos = numero.replace(/\D/g, '').replace(/^55/, '');
  const ddd = digitos.slice(0, 2);
  const parte1 = digitos.slice(2, 7);
  const parte2 = digitos.slice(7);
  return `(${ddd}) ${parte1}-${parte2}`;
}

function montarLinkWhatsapp() {
  const numero = CONFIG.telefone.replace(/\D/g, '');
  const texto = encodeURIComponent(CONFIG.mensagemPadrao);
  return `https://wa.me/${numero}?text=${texto}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const linkWhatsapp = montarLinkWhatsapp();
  document.querySelectorAll('[data-whatsapp-link]').forEach((el) => {
    el.setAttribute('href', linkWhatsapp);
  });

  document.querySelectorAll('[data-phone-link]').forEach((el) => {
    el.setAttribute('href', `tel:${CONFIG.telefone}`);
  });

  document.querySelectorAll('[data-phone-display]').forEach((el) => {
    el.textContent = formatarTelefoneExibicao(CONFIG.telefone);
  });

  document.querySelectorAll('[data-ano]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});

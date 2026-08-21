// Dado sensivel centralizado em um unico lugar: nunca duplicar o numero no HTML.
const CONFIG = {
  telefone: '+5511937297463',
  mensagemPadrao: 'Olá! Vim pelo site da MG Motos e gostaria de um orçamento.',
  enderecoQuery: 'Av. das Cerejeiras, 34, Jardim Japao, Sao Paulo - SP',
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

  document.querySelectorAll('[data-maps-link]').forEach((el) => {
    el.setAttribute('href', `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.enderecoQuery)}`);
  });

  document.querySelectorAll('[data-waze-link]').forEach((el) => {
    el.setAttribute('href', `https://waze.com/ul?q=${encodeURIComponent(CONFIG.enderecoQuery)}&navigate=yes`);
  });

  const mapaWrapper = document.getElementById('mapa-wrapper');
  const mapaToggle = document.querySelector('[data-mapa-toggle]');
  if (mapaWrapper && mapaToggle) {
    mapaToggle.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.title = 'Localização MG Motos';
      iframe.src = mapaWrapper.dataset.mapaSrc;
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      mapaWrapper.innerHTML = '';
      mapaWrapper.appendChild(iframe);
    });
  }

  const orcamentoForm = document.getElementById('orcamento-form');
  if (orcamentoForm) {
    orcamentoForm.addEventListener('submit', (evento) => {
      evento.preventDefault();
      const moto = document.getElementById('orcamento-moto').value;
      const servico = document.getElementById('orcamento-servico').value;
      const numero = CONFIG.telefone.replace(/\D/g, '');
      const texto = encodeURIComponent(`Olá! Gostaria de um orçamento para ${servico} na minha ${moto}.`);
      window.open(`https://wa.me/${numero}?text=${texto}`, '_blank', 'noopener,noreferrer');
    });
  }

  const navToggle = document.querySelector('[data-nav-toggle]');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const aberto = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(aberto));
    });
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Navegacao interna sem expor #ancora na barra de enderecos: intercepta
  // qualquer link href="#algo", rola ate o alvo descontando a altura do
  // header sticky, e nunca escreve no location.hash.
  const header = document.querySelector('.site-header');
  function scrollToTarget(target) {
    const offset = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  }
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (evento) => {
      const id = link.getAttribute('href').slice(1);
      const target = id ? document.getElementById(id) : null;
      evento.preventDefault();
      if (target) {
        scrollToTarget(target);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
});

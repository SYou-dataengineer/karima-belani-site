const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');
const FORMSPREE_ENDPOINT = ''; // FORMSPREE_ENDPOINT À CONFIGURER AVANT LA MISE EN PRODUCTION

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  const setNavOpen = (isOpen) => {
    nav.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  };

  navToggle.addEventListener('click', () => {
    setNavOpen(!nav.classList.contains('is-open'));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setNavOpen(false);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setNavOpen(false);
      navToggle.focus();
    }
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  const formStatus = document.getElementById('formStatus');
  const honeypot = contactForm.querySelector('input[name="website"]');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (honeypot && honeypot.value.trim() !== '') {
      return;
    }

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    if (FORMSPREE_ENDPOINT) {
      contactForm.action = FORMSPREE_ENDPOINT;
      contactForm.submit();
      return;
    }

    if (formStatus) {
      formStatus.innerHTML =
        'Le formulaire de contact sera disponible prochainement. Vous pouvez nous joindre directement par téléphone ou par courriel.<br><a href="mailto:karima.belani@hotmail.com">karima.belani@hotmail.com</a> · <a href="tel:+15148587007">+1 514-858-7007</a>';
    }
  });
}

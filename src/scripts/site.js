const root = document.documentElement;
const body = document.body;
const isLocalPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname);

body.classList.add('enhanced');

const themeToggle = document.querySelector('[data-theme-toggle]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menuClose = document.querySelector('[data-menu-close]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileLinks = mobileMenu?.querySelectorAll('a') || [];

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('baig-theme', theme);
  themeToggle?.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
}

setTheme(root.dataset.theme || 'light');

themeToggle?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

function openMenu() {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.hidden = false;
  menuToggle.setAttribute('aria-expanded', 'true');
  body.classList.add('menu-open');
  menuClose?.focus();
}

function closeMenu({ returnFocus = true } = {}) {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  body.classList.remove('menu-open');
  if (returnFocus) {
    menuToggle.focus();
  }
}

menuToggle?.addEventListener('click', openMenu);
menuClose?.addEventListener('click', closeMenu);
mobileLinks.forEach((link) => link.addEventListener('click', () => {
  if (!mobileMenu?.hidden) closeMenu({ returnFocus: false });
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileMenu?.hidden) closeMenu();
});

mobileMenu?.addEventListener('click', (event) => {
  if (event.target === mobileMenu) closeMenu();
});

function scrollToHash() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  const headerOffset = document.querySelector('[data-header]')?.getBoundingClientRect().height || 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
}

window.addEventListener('load', () => {
  window.setTimeout(scrollToHash, 80);
});

window.addEventListener('hashchange', () => {
  window.setTimeout(scrollToHash, 40);
});

const revealItems = document.querySelectorAll('.reveal');
revealItems.forEach((item, index) => {
  const seq = Number(item.getAttribute('data-reveal-seq') || 0);
  item.style.setProperty('--reveal-seq', String(seq + (index % 3)));
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      window.requestAnimationFrame(() => {
        entry.target.classList.add('is-visible');
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const form = document.querySelector('[data-contact-form]');
const formMessage = document.querySelector('[data-form-message]');
const successUrl = form?.getAttribute('data-success-url') || '/success/';

function encodeFormData(formData) {
  return new URLSearchParams(formData).toString();
}

form?.addEventListener('submit', async (event) => {
  if (!form.checkValidity()) return;
  if (isLocalPreview) {
    event.preventDefault();
    if (formMessage) {
      formMessage.dataset.state = 'error';
      formMessage.textContent = 'Form delivery cannot be verified in local preview. Test a submission after deployment.';
    }
    return;
  }

  event.preventDefault();
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton?.textContent || 'Send Inquiry';
  const formData = new FormData(form);

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
  }

  if (formMessage) {
    formMessage.textContent = '';
    formMessage.dataset.state = '';
  }

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData(formData)
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    window.location.assign(successUrl);
  } catch {
    if (formMessage) {
      formMessage.dataset.state = 'error';
      formMessage.textContent = 'Your inquiry could not be sent. Please try again.';
    }
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  }
});

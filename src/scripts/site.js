const body = document.body;
const isLocalPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname);

body.classList.add('enhanced');

const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuPanel = mobileMenu?.querySelector('.mobile-menu__panel');
const mobileLinks = mobileMenu?.querySelectorAll('a') || [];
let closeTransitionFrame = 0;
let closeCleanupTimer = 0;

function isMenuOpen() {
  return mobileMenu?.classList.contains('is-active');
}

function setMenuInteractivityState(isInteractive) {
  if (!mobileMenu) return;
  mobileMenu.setAttribute('aria-hidden', isInteractive ? 'false' : 'true');
  if ('inert' in mobileMenu) {
    mobileMenu.inert = !isInteractive;
  } else if (!isInteractive) {
    mobileMenu.setAttribute('inert', '');
  } else {
    mobileMenu.removeAttribute('inert');
  }
}

function clearCloseCleanupTimer() {
  if (!closeCleanupTimer) return;
  window.clearTimeout(closeCleanupTimer);
  closeCleanupTimer = 0;
}

function finalizeClosedState() {
  if (!mobileMenu || isMenuOpen()) return;
  mobileMenu.hidden = true;
  setMenuInteractivityState(false);
}

function queueCloseCleanup() {
  clearCloseCleanupTimer();
  closeCleanupTimer = window.setTimeout(() => {
    closeCleanupTimer = 0;
    finalizeClosedState();
  }, 420);
}

function openMenu() {
  if (!mobileMenu || !menuToggle) return;
  window.cancelAnimationFrame(closeTransitionFrame);
  clearCloseCleanupTimer();
  mobileMenu.hidden = false;
  setMenuInteractivityState(true);
  menuToggle.setAttribute('aria-expanded', 'true');
  body.classList.add('menu-open');
  closeTransitionFrame = window.requestAnimationFrame(() => {
    closeTransitionFrame = 0;
    mobileMenu.classList.add('is-active');
  });
}

function closeMenu({ returnFocus = true } = {}) {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.classList.remove('is-active');
  menuToggle.setAttribute('aria-expanded', 'false');
  body.classList.remove('menu-open');
  queueCloseCleanup();

  if (returnFocus) {
    menuToggle.focus();
  }
}

mobileMenuPanel?.addEventListener('transitionend', (event) => {
  if (event.target !== mobileMenuPanel || event.propertyName !== 'opacity') return;
  if (isMenuOpen()) return;
  finalizeClosedState();
});

menuToggle?.addEventListener('click', () => {
  if (isMenuOpen()) {
    closeMenu();
  } else {
    openMenu();
  }
});
mobileLinks.forEach((link) => link.addEventListener('click', () => {
  if (isMenuOpen()) closeMenu({ returnFocus: false });
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isMenuOpen()) closeMenu();
});

mobileMenu?.addEventListener('click', (event) => {
  if (event.target === mobileMenu) closeMenu();
});

/* Active section tracking */
const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');
const sectionTargets = document.querySelectorAll('section[id]');
let activeSectionId = '';
let scrollLockUntil = 0;

function setActiveNav(id) {
  if (!id || id === activeSectionId) return;
  activeSectionId = id;
  navLinksAll.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
  });
}

navLinksAll.forEach((link) => {
  link.addEventListener('click', (event) => {
    const now = window.performance.now();
    if (now < scrollLockUntil) {
      event.preventDefault();
      return;
    }

    const href = link.getAttribute('href');
    if (!href?.startsWith('#')) return;

    scrollLockUntil = now + 800;
    setActiveNav(href.slice(1));
  });
});

if ('IntersectionObserver' in window && sectionTargets.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visibleEntries = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (!visibleEntries.length) return;

    setActiveNav(visibleEntries[0].target.id);
  }, { threshold: 0.05, rootMargin: '-10% 0px -50% 0px' });

  sectionTargets.forEach((section) => sectionObserver.observe(section));
} else if (window.location.hash) {
  setActiveNav(window.location.hash.slice(1));
}

if (!activeSectionId && sectionTargets.length) {
  const currentSection = Array.from(sectionTargets).find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.1;
  });

  if (currentSection) {
    setActiveNav(currentSection.id);
  } else {
    setActiveNav(sectionTargets[0].id);
  }
}

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

form?.addEventListener('submit', async (event) => {
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  event.preventDefault();

  const submitButton = form.querySelector('button[type="submit"]');
  const successUrl = form.dataset.successUrl || '/success/';
  const formData = new FormData(form);

  if (formMessage) {
    formMessage.dataset.state = '';
    formMessage.textContent = '';
  }

  submitButton?.setAttribute('disabled', 'true');

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    });

    let payload = null;
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      payload = await response.json().catch(() => null);
    }

    if (!response.ok) {
      const fallbackMessage = isLocalPreview
        ? 'Form delivery is unavailable in this local preview. Use Cloudflare Pages Functions preview to test submissions.'
        : 'The inquiry could not be sent. Please try again.';
      throw new Error(payload?.error || fallbackMessage);
    }

    if (formMessage) {
      formMessage.dataset.state = 'success';
      formMessage.textContent = 'Inquiry sent. Redirecting...';
    }

    window.location.assign(successUrl);
  } catch (error) {
    if (formMessage) {
      formMessage.dataset.state = 'error';
      formMessage.textContent = error instanceof Error ? error.message : 'The inquiry could not be sent. Please try again.';
    }
  } finally {
    submitButton?.removeAttribute('disabled');
  }
});

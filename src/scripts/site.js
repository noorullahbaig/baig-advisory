const root = document.documentElement;
const body = document.body;
const isLocalPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname);

body.classList.add('enhanced');

const themeToggle = document.querySelector('[data-theme-toggle]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menuClose = document.querySelector('[data-menu-close]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const siteHeader = document.querySelector('[data-header]');
const mobileLinks = mobileMenu?.querySelectorAll('a') || [];
let headerSyncFrame = 0;

function syncHeaderHeight() {
  if (!siteHeader) return;
  const measuredHeight = `${Math.ceil(siteHeader.getBoundingClientRect().height)}px`;
  if (root.style.getPropertyValue('--header-height') === measuredHeight) return;
  root.style.setProperty('--header-height', measuredHeight);
}

function queueHeaderHeightSync() {
  if (headerSyncFrame) return;
  headerSyncFrame = window.requestAnimationFrame(() => {
    headerSyncFrame = 0;
    syncHeaderHeight();
  });
}

syncHeaderHeight();
window.addEventListener('load', syncHeaderHeight, { once: true });
window.addEventListener('resize', queueHeaderHeightSync);
window.addEventListener('orientationchange', queueHeaderHeightSync);

document.fonts?.ready.then(syncHeaderHeight).catch(() => {});

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

form?.addEventListener('submit', (event) => {
  if (!form.checkValidity()) return;
  if (isLocalPreview) {
    event.preventDefault();
    if (formMessage) {
      formMessage.dataset.state = 'error';
      formMessage.textContent = 'Form delivery cannot be verified in local preview. Test a submission after deployment.';
    }
    return;
  }
});

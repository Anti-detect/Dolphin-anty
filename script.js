const AFFILIATE_LINK =
  'https://multilogin.com/pricing/?utm_source=saas&utm_medium=partner&a_aid=saas&a_bid=f5fad549';

const PROMO_CODES = {
  subscription: 'SAAS50',
  cloudPhone: 'MIN50'
};

const LANG_ROUTES = [
  { dir: '', label: 'English' },
  { dir: 'zh/', label: '中文' },
  { dir: 'ru/', label: 'Русский' },
  { dir: 'vi/', label: 'Tiếng Việt' },
  { dir: 'id/', label: 'Bahasa Indonesia' },
  { dir: 'pt/', label: 'Português (BR)' },
  { dir: 'es/', label: 'Español' }
];

function siteRootPrefix() {
  const p = window.location.pathname;
  return /\/(zh|ru|vi|id|pt|es)\//.test(p) ? '../' : '';
}

function populateLangMenu() {
  const menu = document.getElementById('langMenu');
  if (!menu) return;
  const root = siteRootPrefix();
  menu.innerHTML = LANG_ROUTES.map(
    (l) => `<li><a href="${root}${l.dir || 'index.html'}">${l.label}</a></li>`
  ).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  populateLangMenu();

  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', () => {
      langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', (e) => {
      if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.style.display = 'none';
      }
    });
  }

  document.querySelectorAll('[data-affiliate="true"], a[id^="affiliate"]').forEach((el) => {
    try {
      el.href = AFFILIATE_LINK;
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer sponsored');
    } catch (_) {}
  });

  document.querySelectorAll('[data-promo="subscription"]').forEach((el) => {
    el.textContent = PROMO_CODES.subscription;
  });
  document.querySelectorAll('[data-promo="cloudPhone"]').forEach((el) => {
    el.textContent = PROMO_CODES.cloudPhone;
  });

  document.querySelectorAll('[data-cta-label="subscription"]').forEach((el) => {
    el.textContent = `Multilogin Pricing — ${PROMO_CODES.subscription}`;
  });
});

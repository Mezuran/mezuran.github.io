import { translationMap, type Lang } from '../i18n/translations';

const SUPPORTED: Lang[] = ['en', 'id', 'zh'];

function getLang(): Lang {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('lang');
  if (raw && SUPPORTED.includes(raw as Lang)) return raw as Lang;
  return 'en';
}

export function applyTranslations() {
  const lang = getLang();
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const entry = translationMap[key];
    if (!entry) return;
    const text = entry[lang] ?? entry.en;
    if (text !== undefined) {
      el.textContent = text;
    }
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (!key) return;
    const entry = translationMap[key];
    if (!entry) return;
    const html = entry[lang] ?? entry.en;
    if (html !== undefined) {
      el.innerHTML = html;
    }
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (!key) return;
    const entry = translationMap[key];
    if (!entry) return;
    const text = entry[lang] ?? entry.en;
    if (text !== undefined) {
      el.setAttribute('placeholder', text);
    }
  });

  // Highlight active language button
  document.querySelectorAll<HTMLElement>('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('font-semibold', btn.dataset.langBtn === lang);
    btn.classList.toggle('text-gray-900', btn.dataset.langBtn === lang);
    btn.classList.toggle('text-gray-500', btn.dataset.langBtn !== lang);
  });

  // Update switcher label
  const label = document.getElementById('lang-label');
  if (label) {
    const labels: Record<Lang, string> = { en: 'EN', id: 'ID', zh: '中' };
    label.textContent = labels[lang] || 'EN';
  }
}

export function switchLang(lang: Lang) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.location.href = url.toString();
}

// Auto-init
if (typeof document !== 'undefined') {
  applyTranslations();
  document.addEventListener('astro:after-swap', applyTranslations);
}

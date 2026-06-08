(function () {

const GLOBE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
</svg>`;

const NAV = `
<nav class="nav" id="main-nav">
  <div class="nav__inner">

    <a href="index.html" class="nav__logo">
      <img src="images/logo_nav_t.png" alt="AMM Plastic Surgery" class="nav__logo-img"/>
      <div class="nav__logo-text">
        <span class="nav__logo-name">Ahmed Mokhallalati</span>
        <span class="nav__logo-title" data-i18n="nav_logo_title">Consultant Plastic &amp; Reconstructive Surgeon</span>
      </div>
    </a>

    <div class="nav__right">
      <div class="nav__socials">
        <a href="https://x.com/amokhallalati" target="_blank" rel="noopener" aria-label="Twitter/X" class="nav__social-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/ahmed-el-mokhallalati-669ba6193" target="_blank" rel="noopener" aria-label="LinkedIn" class="nav__social-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="https://www.instagram.com/amokhallalati" target="_blank" rel="noopener" aria-label="Instagram" class="nav__social-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>
      </div>

      <div class="nav__divider"></div>

      <a href="mailto:Dr.ahmofeed@gmail.com" class="nav__contact-link" aria-label="Email">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
        <span class="nav__contact-txt">Dr.ahmofeed@gmail.com</span>
      </a>
      <div class="nav__divider"></div>

      <!-- Globe language toggle -->
      <button class="lang-toggle" onclick="toggleLang()" title="Switch language / تغيير اللغة">
        ${GLOBE_SVG}
        <span class="lang-toggle__txt">EN / عر</span>
      </button>

      <div class="nav__divider"></div>

      <button class="nav__menu-btn" id="menu-btn" onclick="toggleMenu()">
        <span class="nav__menu-word" id="menu-word">menu</span>
        <div class="nav__menu-icon" id="menu-icon">
          <span></span><span></span><span></span>
        </div>
      </button>
    </div>
  </div>
</nav>

<div class="nav__drawer" id="nav-drawer">
  <div class="nav__drawer-inner">
    <div class="nav__drawer-header">
      <a href="index.html" class="nav__drawer-logo">
        <img src="images/logo_nav_t.png" alt="AMM Logo"/>
        <span class="nav__drawer-logo-name">Ahmed Mokhallalati</span>
      </a>
      <button class="nav__drawer-close" onclick="toggleMenu()" aria-label="Close menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <div class="nav__drawer-links">
      <a href="index.html"             data-i18n="nav_home">Home</a>
      <a href="about.html"             data-i18n="nav_about">About</a>
      <a href="clinical-practice.html" data-i18n="nav_clinical">Clinical Practice</a>
      <a href="publications.html"      data-i18n="nav_publications">Publications</a>
            <a href="global-health.html"     data-i18n="nav_global">Global Health</a>
      <a href="legacy.html"            data-i18n="nav_legacy">Legacy</a>
      <a href="contact.html"           data-i18n="nav_contact">Contact</a>
    </div>

    <div class="nav__drawer-footer">
      <div class="nav__drawer-socials">
        <a href="https://x.com/amokhallalati" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/ahmed-el-mokhallalati-669ba6193" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="https://www.instagram.com/amokhallalati" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>
        <a href="mailto:Dr.ahmofeed@gmail.com">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
      </div>
      <p class="nav__drawer-copy">© ${new Date().getFullYear()} Ahmed Mokhallalati</p>
    </div>
  </div>
</div>`;

const FOOTER = `
<footer>
  <div class="footer__inner">
    <div class="footer__top">
      <div>
        <img src="images/logo_nav_t.png" alt="AMM Plastic Surgery" class="footer__logo-img"/>
        <div class="footer__brand-name">Ahmed Mokhallalati</div>
        <div class="footer__brand-sub">MBChB · ABHS(Plast) · FRCS(Eng) ad eundem</div>
        <div class="footer__brand-sub" data-i18n="nav_logo_title">Consultant Plastic &amp; Reconstructive Surgeon</div>
        <div class="footer__social">
          <a href="https://x.com/amokhallalati" target="_blank" rel="noopener" aria-label="Twitter/X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/ahmed-el-mokhallalati-669ba6193" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://www.instagram.com/amokhallalati" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="mailto:Dr.ahmofeed@gmail.com" aria-label="Email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </div>
      </div>
      <nav class="footer__nav">
        <a href="index.html"             data-i18n="nav_home">Home</a>
        <a href="about.html"             data-i18n="nav_about">About</a>
        <a href="clinical-practice.html" data-i18n="nav_clinical">Clinical Practice</a>
        <a href="publications.html" data-i18n="nav_publications">Publications</a>
            <a href="global-health.html"     data-i18n="nav_global">Global Health</a>
        <a href="legacy.html"            data-i18n="nav_legacy">Legacy</a>
        <a href="contact.html"           data-i18n="nav_contact">Contact</a>
        <a href="privacy.html">Privacy Policy</a>
      </nav>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy" data-i18n="footer_copy">© ${new Date().getFullYear()} Ahmed Mokhallalati. All rights reserved.</p>
      <a href="privacy.html" style="font-size:12px;color:rgba(255,255,255,0.35);text-decoration:underline;text-underline-offset:3px;transition:color .2s" onmouseover="this.style.color='var(--teal)'" onmouseout="this.style.color='rgba(255,255,255,0.35)'">Privacy Policy</a>
      <p class="footer__copy" data-i18n="footer_hospitals">Hull University Teaching Hospitals NHS Trust · Lake Clinic, Doncaster</p>
    </div>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', NAV);
  document.body.insertAdjacentHTML('beforeend', FOOTER);

  /* active link */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__drawer-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

function toggleMenu() {
  const drawer = document.getElementById('nav-drawer');
  const word   = document.getElementById('menu-word');
  const btn    = document.getElementById('menu-btn');
  const isOpen = drawer.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  word.textContent = isOpen ? 'close' : 'menu';
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

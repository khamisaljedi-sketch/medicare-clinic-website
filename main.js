document.addEventListener('DOMContentLoaded', () => {

  /* ── Active nav link ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__drawer-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* ── Scroll fade-in ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.05}s`;
    io.observe(el);
  });

  /* ── Apply saved language ── */
  if (typeof applyLang === 'function') applyLang();

  /* ── Image Sliders (stacked fade style) ── */
  document.querySelectorAll('.slider').forEach(slider => {
    const slides = Array.from(slider.querySelectorAll('.slider__slide'));
    const dots   = slider.querySelectorAll('.slider__dot');
    const count  = slider.querySelector('.slider__count');
    let current  = 0;
    const total  = slides.length;

    function goTo(n) {
      slides[current].classList.remove('active');
      dots[current]?.classList.remove('active');
      current = (n + total) % total;
      slides[current].classList.add('active');
      dots[current]?.classList.add('active');
      if (count) count.textContent = `${current + 1} / ${total}`;
    }
    goTo(0);

    slider.querySelector('.slider__btn--prev')
      ?.addEventListener('click', () => goTo(current - 1));
    slider.querySelector('.slider__btn--next')
      ?.addEventListener('click', () => goTo(current + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

    let startX = 0;
    slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, {passive:true});
    slider.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    }, {passive:true});

    let timer = setInterval(() => goTo(current + 1), 5000);
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () => {
      timer = setInterval(() => goTo(current + 1), 5000);
    });
  });

  /* ── Back to top button ── */
  const btt = document.createElement('a');
  btt.className = 'back-to-top';
  btt.href = '#';
  btt.setAttribute('aria-label', 'Back to top');
  btt.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 15l-6-6-6 6"/></svg>';
  btt.addEventListener('click', e => { e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); });
  document.body.appendChild(btt);

  window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 400);
  }, {passive:true});

  /* ── Cookie consent banner ── */
  if (!localStorage.getItem('cookie_consent')) {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <p class="cookie-banner__text">
        This website uses essential cookies to function correctly. By continuing to browse, you agree to our use of cookies.
        <a href="privacy.html">Privacy Policy</a>
      </p>
      <div class="cookie-banner__btns">
        <button class="cookie-banner__decline" id="cookie-decline">Decline</button>
        <button class="cookie-banner__accept" id="cookie-accept">Accept</button>
      </div>`;
    document.body.appendChild(banner);
    requestAnimationFrame(() => banner.classList.add('visible'));

    document.getElementById('cookie-accept').addEventListener('click', () => {
      localStorage.setItem('cookie_consent', 'accepted');
      banner.classList.remove('visible');
      setTimeout(() => banner.remove(), 400);
    });
    document.getElementById('cookie-decline').addEventListener('click', () => {
      localStorage.setItem('cookie_consent', 'declined');
      banner.classList.remove('visible');
      setTimeout(() => banner.remove(), 400);
    });
  }

  /* ── Update html lang attr when language toggles ── */
  const origToggle = window.toggleLang;
  window.toggleLang = function() {
    if (origToggle) origToggle();
    const dir = document.documentElement.getAttribute('dir') || 'ltr';
    document.documentElement.lang = (dir === 'rtl') ? 'en' : 'ar';
  };

});

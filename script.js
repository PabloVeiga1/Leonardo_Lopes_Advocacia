const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

document.querySelectorAll('.stat, .service-card, .resource-card, .cred, .about-body p, .about-quote-side').forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 3 === 1) el.classList.add('reveal-delay-1');
  if (i % 3 === 2) el.classList.add('reveal-delay-2');
  revealObserver.observe(el);
});

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 60 ? '12px 64px' : '20px 64px';
  nav.style.borderBottomColor = window.scrollY > 60 ? 'rgba(196,154,60,0.18)' : 'rgba(196,154,60,0.10)';
}, { passive: true });
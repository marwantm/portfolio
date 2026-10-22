// scroll-animations.js – reveal elements on scroll (respect reduced motion)
export function initScrollAnimations() {
  const progress = document.querySelector('.scroll-progress span');
  const animateElements = [...document.querySelectorAll(
    '.animate, .service-item, .skill-row, .about-facts span, .contact-links a, .contact-form'
  )];

  const updateProgress = () => {
    if (progress) {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
    }
  };

  const updateReveals = () => {
    animateElements.forEach(el => {
      const bounds = el.getBoundingClientRect();
      const start = window.innerHeight;
      const revealProgress = Math.max(0, Math.min(1, (start - bounds.top) / 80));
      const amount = bounds.bottom <= 0 ? 1 : revealProgress;
      el.style.opacity = amount;
      el.style.transform = `translateY(${(1 - amount) * 36}px) scale(${0.985 + amount * 0.015})`;
      el.classList.toggle('in-view', amount >= 1);
    });
  };

  animateElements.forEach((el, i) => {
    el.classList.add('pre-animation');
    el.style.opacity = '0';
    el.style.transform = 'translateY(36px) scale(.985)';
    el.style.transitionDelay = el.matches('.contact-links a')
      ? '0s'
      : `${Math.min(i * 0.025, 0.15)}s`;
  });

  let frame = 0;
  const onScroll = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      updateProgress();
      updateReveals();
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  updateProgress();
  updateReveals();
}

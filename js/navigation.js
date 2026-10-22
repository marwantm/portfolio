// navigation.js – smooth scrolling and sticky top navigation
export function initNavigation() {
  const smoothScrollTo = target => {
    const start = window.scrollY;
    const distance = target.getBoundingClientRect().top;
    const duration = 1100;
    const startedAt = performance.now();
    const easeInOut = progress => progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    const animate = now => {
      const progress = Math.min((now - startedAt) / duration, 1);
      window.scrollTo(0, start + distance * easeInOut(progress));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  // Smooth scroll for anchors with data-scroll attribute
  document.querySelectorAll('a[data-scroll]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      if (this.dataset.service) {
        const service = this.dataset.service;
        const message = document.querySelector('#message');
        if (service && message) {
          message.value = service;
          message.focus({ preventScroll: true });
          message.setSelectionRange(message.value.length, message.value.length);
        }
      }
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        smoothScrollTo(target);
      }
    });
  });

  // Sticky navigation – add .sticky class when scrolled past its initial position
  const nav = document.querySelector('.nav-primary');
  if (!nav) return;
  if (!nav.classList.contains('intro-nav')) {
    const navOffset = nav.offsetTop;
    const onScroll = () => {
      if (window.scrollY > navOffset) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    };
    window.addEventListener('scroll', onScroll);
    // Run once on load
    onScroll();
  }
// Active section highlighting
const sectionLinks = document.querySelectorAll('.nav-primary a[data-scroll]');
const sections = document.querySelectorAll('section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const link = document.querySelector(`.nav-primary a[href="#${entry.target.id}"]`);
    if (link) {
      if (entry.isIntersecting) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}, { rootMargin: '-20% 0px -80% 0px', threshold: 0 });
sections.forEach(sec => sectionObserver.observe(sec));
}

// lightbox.js – simple image overlay viewer
export function initLightbox() {
  // Create overlay element if not present
  let lightbox = document.getElementById('lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = '<img src="" alt=""/><button id="lightbox-close" aria-label="Close">✕</button>';
    document.body.appendChild(lightbox);
    const img = lightbox.querySelector('img');
    const closeBtn = document.getElementById('lightbox-close');
    const hide = () => {
      lightbox.style.display = 'none';
      img.src = '';
    };
    closeBtn.addEventListener('click', hide);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) hide();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') hide();
    });
  }

  // Attach to any image with .lightbox-trigger
  document.querySelectorAll('img.lightbox-trigger').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const overlay = document.getElementById('lightbox');
      const overlayImg = overlay.querySelector('img');
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;
      overlay.style.display = 'flex';
    });
  });
}

// project-sidebar.js – sticky sidebar on desktop, horizontal scroll on mobile
export function initProjectSidebar() {
  const sidebar = document.getElementById('project-sidebar');
  if (!sidebar) return;

  const isDesktop = window.matchMedia('(min-width: 992px)');

  const sections = Array.from(document.querySelectorAll('.project-content section'));
  const navList = document.createElement('ul');
  sections.forEach(sec => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${sec.id}`;
    a.textContent = sec.querySelector('h2').textContent;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById(sec.id).scrollIntoView({ behavior: 'smooth' });
    });
    li.appendChild(a);
    navList.appendChild(li);
  });

  const renderDesktop = () => {
    sidebar.innerHTML = '';
    const wrapper = document.createElement('nav');
    wrapper.className = 'project-sidebar';
    wrapper.appendChild(navList);
    sidebar.appendChild(wrapper);
  };

  const renderMobile = () => {
    sidebar.innerHTML = '';
    const wrapper = document.createElement('nav');
    wrapper.className = 'project-sidebar-mobile';
    wrapper.style.overflowX = 'auto';
    wrapper.style.whiteSpace = 'nowrap';
    navList.style.display = 'inline-flex';
    navList.style.gap = '1rem';
    wrapper.appendChild(navList);
    sidebar.appendChild(wrapper);
  };

  const update = (e) => {
    if (e.matches) {
      renderDesktop();
    } else {
      renderMobile();
    }
  };

  // Initial render
  update(isDesktop);
  // Listen for viewport changes
  isDesktop.addEventListener('change', update);
}

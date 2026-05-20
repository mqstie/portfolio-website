// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0, rootMargin: '0px 0px -120px 0px' }
);

document.querySelectorAll('.project-card, .experience-item, .section-header').forEach((el) => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 20
    ? 'rgba(26, 25, 23, 0.12)'
    : 'rgba(26, 25, 23, 0.06)';
});

// Smooth active nav highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute('href') === `#${entry.target.id}`
            ? 'var(--text-primary)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => sectionObserver.observe(s));

// Side nav active state
const sideLinks = document.querySelectorAll('.project-sidenav a');
const projectSections = document.querySelectorAll('section[id]');

const sideObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sideLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, { threshold: 0, rootMargin: '-40% 0px -55% 0px' });

projectSections.forEach(s => sideObserver.observe(s));
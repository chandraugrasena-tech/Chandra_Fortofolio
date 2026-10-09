const backToTop = document.getElementById('backToTop');

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (backToTop) {
  window.addEventListener('scroll', () => backToTop.classList.toggle('show', window.scrollY > 300));
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('active'));
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

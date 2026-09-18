// Toggle Mobile Navigation Menu
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Theme Switcher (Dark/Light Mode)
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    document.querySelectorAll('.theme-icon').forEach(el => el.innerText = '☀️');
  } else {
    document.body.classList.remove('light-mode');
    document.querySelectorAll('.theme-icon').forEach(el => el.innerText = '🌙');
  }
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  document.querySelectorAll('.theme-icon').forEach(el => el.innerText = isLight ? '☀️' : '🌙');
}

// Jalankan tema pas halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});
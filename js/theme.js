document.documentElement.dataset.theme = localStorage.getItem('theme') || 'dark';
document.documentElement.classList.add('js');

function setIcons() {
  const light = document.documentElement.dataset.theme === 'light';
  document.querySelectorAll('.theme-icon').forEach(el => el.textContent = light ? '☀️' : '🌙');
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
  setIcons();
}

document.addEventListener('DOMContentLoaded', setIcons);

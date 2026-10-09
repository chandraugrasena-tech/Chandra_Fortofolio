function flipPreview(box) {
  box.dataset.preview = box.dataset.preview === 'dark' ? 'light' : 'dark';
}

document.querySelectorAll('[data-theme-preview]').forEach(box => {
  box.dataset.preview = document.documentElement.dataset.theme;
  box.addEventListener('click', () => flipPreview(box));
});

document.querySelectorAll('[data-theme-btn]').forEach(btn => {
  btn.addEventListener('click', () => flipPreview(document.getElementById(btn.dataset.themeBtn)));
});

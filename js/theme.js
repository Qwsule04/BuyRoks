const btn = document.getElementById('theme-toggle');

function applyTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  if (btn) {
    btn.textContent = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  }
}

applyTheme(localStorage.getItem('theme') === 'dark');

if (btn) {
  btn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
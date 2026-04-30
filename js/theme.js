
(function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  const switchInput = document.querySelector('.switch input');
  if (!switchInput) return;


  if (localStorage.getItem('theme') === 'dark') {
    switchInput.checked = true;
  }


  switchInput.addEventListener('change', function () {
    if (this.checked) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark-mode');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark-mode');
    }
  });
});
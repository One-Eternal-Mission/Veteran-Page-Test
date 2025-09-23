// Minimal JS: mobile menu + placeholder buttons + year
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.getElementById('year').textContent = new Date().getFullYear();

// Warn when clicking placeholder buttons
document.querySelectorAll('[data-placeholder]').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('This is a placeholder. Links will be activated later.');
  });
});

const toggleButton = document.getElementsByClassName('menu')[0];
const navlinks = document.getElementsByClassName('nav-list')[0];

toggleButton.addEventListener('click', () => {
  navlinks.classList.toggle('active');
});

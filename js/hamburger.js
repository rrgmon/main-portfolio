const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("nav-list")[0];

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

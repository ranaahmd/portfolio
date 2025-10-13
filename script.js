const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");
const btn = document.getElementById('contact-btn');
const icons = document.getElementById('social-icons');
btn.addEventListener('click', () => {
  icons.style.display = icons.style.display === 'none' ? 'flex' : 'none';
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});
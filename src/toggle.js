const navLinks = document.querySelector(".nav-links");
function onToggleMenu(icon) {
  icon.name = icon.name === "menu-outline" ? "close-outline" : "menu-outline";
  navLinks.classList.toggle("translate-x-full");
  navLinks.classList.toggle("opacity-100");
}

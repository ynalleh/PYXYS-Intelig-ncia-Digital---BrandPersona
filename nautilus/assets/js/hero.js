// Menu responsivo: alterna visibilidade da navegação

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("hero-nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
});



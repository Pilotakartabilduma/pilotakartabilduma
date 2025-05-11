document.querySelectorAll('.cromo').forEach(cromo => {
  cromo.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = e.target.src;
    lightbox.style.display = 'flex';
  });
});

document.getElementById('close').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});
document.addEventListener('DOMContentLoaded', () => {
  // Menú desplegable
  const menuIcon = document.getElementById('menu-icon');
  const menuList = document.getElementById('menu-list');

  if (menuIcon && menuList) {
    menuIcon.addEventListener('click', () => {
      // Alternar la clase 'show' para mostrar/ocultar el menú
      menuList.classList.toggle('show');
    });
  }
});
let index = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSiguiente() {
  slides[index].classList.remove('activo');
  index = (index + 1) % slides.length;
  slides[index].classList.add('activo');
}

setInterval(mostrarSiguiente, 3000); // Cambia cada 3 segundos


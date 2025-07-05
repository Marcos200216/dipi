// Desplazamiento suave entre secciones
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Función para abrir el modal
function openForm() {
  document.getElementById("contactModal").style.display = "block";
}

// Función para cerrar el modal
function closeForm() {
  document.getElementById("contactModal").style.display = "none";
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
  if (event.target == document.getElementById("contactModal")) {
    closeForm();
  }
}
 document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide');

  function showNextSlide() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }

  setInterval(showNextSlide, 3000);
});
document.addEventListener('DOMContentLoaded', () => {
  const dipiSection = document.querySelector('.dipi-section');

  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop && scrollTop > 100) {
      // Scroll hacia abajo, oculta la sección
      dipiSection.classList.add('hidden');
    } else {
      // Scroll hacia arriba, muestra la sección
      dipiSection.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
  }, false);
});

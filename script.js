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
window.onclick = function (event) {
  if (event.target == document.getElementById("contactModal")) {
    closeForm();
  }
};

// Carrusel automático
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

// Animación de entrada para la sección .dipi-section
document.addEventListener('DOMContentLoaded', () => {
  const dipiSection = document.querySelector('.dipi-section');
  dipiSection.classList.add('fade-in-up'); // clase base para animación

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
  dipiSection.classList.add('visible');
} else {
  dipiSection.classList.remove('visible');
}

    });
  }, {
    threshold: 0.2
  });

  observer.observe(dipiSection);
});

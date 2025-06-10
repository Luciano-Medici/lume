document.addEventListener('DOMContentLoaded', () => {
  // 1. Selecciona SOLO los elementos con la clase fade-in-element
  const elements = document.querySelectorAll('.fade-in-element');
  
  // 2. Configuración mejorada del observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 3. Simplificamos la lógica - solo manejar cuando intersecta
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.remove('hidden');
      } else {
        // Solo aplicar 'hidden' si no está en el viewport
        entry.target.classList.remove('visible');
        entry.target.classList.add('hidden');
      }
    });
  }, {
    threshold: 0.1, // 10% del elemento visible para activar
    rootMargin: '0px 0px -50px 0px' // Margen inferior negativo para activar antes
  });

  // 4. Observar cada elemento
  elements.forEach(el => {
    // Asegurarse que tiene las clases iniciales
    el.classList.add('fade-in-element');
    el.classList.add('hidden');
    observer.observe(el);
  });
});
const classic = document.getElementById('classic-content');
const exquisit = document.getElementById('exquisit-content');

const cargarContent = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
};

const observador = new IntersectionObserver(cargarContent, {
  root: null,
  rootMargin: '500px 0px 100px 0px',
  threshold: 1.0,
});

observador.observe(classic);
observador.observe(exquisit);

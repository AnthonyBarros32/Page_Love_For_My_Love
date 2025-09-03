// Animar eventos al hacer scroll
const events = document.querySelectorAll('.event');

function revealEvents() {
  events.forEach(e => {
    const top = e.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) {
      e.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealEvents);
window.addEventListener('load', revealEvents);

const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  let scrollAmount = 0;
  const scrollStep = 2; // velocidad
  function autoScroll() {
    scrollAmount += scrollStep;
    if(scrollAmount > carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    requestAnimationFrame(autoScroll);
  }
  autoScroll();
});

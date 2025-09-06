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
  const imgs = carousel.querySelectorAll("img");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % imgs.length; // avanza en bucle
    carousel.scrollTo({
      left: index * 270, // 260px de imagen + 10px gap
      behavior: "smooth"
    });
  }, 3000); // cada 3 segundos
});

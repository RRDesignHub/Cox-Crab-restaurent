const myCarouselElement = document.querySelector('#carouselExampleControls');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 4000,
  wrap: true
})



document.addEventListener("DOMContentLoaded", function() {
  const reviewCarouselElement = document.querySelector('#carouselExampleIndicators2');
  const reviewcarousel = new bootstrap.Carousel(reviewCarouselElement, {
    interval: 2000,
    wrap: true
  });
});



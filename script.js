let sliderContainer = document.querySelector(".sliderContainer");
let slides = sliderContainer.getElementsByClassName("sliderImg");

function nextSlide() {
  slides[0].classList.add("d-none");
  slides[slides.length - 1].classList.remove("d-none");
  sliderContainer.append(slides[0]);
}

function prevSlide() {
  sliderContainer.prepend(slides[slides.length - 1]);
  slides[0].classList.remove("d-none");
  slides[slides.length - 1].classList.add("d-none");
}
setInterval(nextSlide, 5000);

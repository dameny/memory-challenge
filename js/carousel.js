const slideCollection = $('.carousel__slides');
const container = $('.container-grid');
const slides = $('.carousel__slide');
const nextButton = $('.carousel__button--right');
const prevButton = $('.carousel__button--left');
let slideWidth = 0;

function resizeCarousel() {
  const currentSlide = $('.current-slide');
  const currentSlideIndex = slides.index(currentSlide);

  slideWidth = container[0].getBoundingClientRect().width;
  slides.first().css('margin-left', `-${currentSlideIndex * slideWidth}px`);
}

resizeCarousel();
$(window).resize(resizeCarousel);

nextButton.bind('click', function () {
  const currentSlide = $('.current-slide');
  const nextSlide = currentSlide.next();
  const nextSlideIndex = slides.index(nextSlide);

  slides.first().css('margin-left', `-${nextSlideIndex * slideWidth}px`);
  prevButton.removeClass('hidden');
  currentSlide.removeClass('current-slide');
  nextSlide.addClass('current-slide');

  if (!nextSlide.next().length) {
    nextButton.addClass('hidden');
  }
});

prevButton.bind('click', function () {
  const currentSlide = $('.current-slide');
  const prevSlide = currentSlide.prev();
  const prevSlideIndex = slides.index(prevSlide);

  slides.first().css('margin-left', `-${prevSlideIndex * slideWidth}px`);
  nextButton.removeClass('hidden');
  currentSlide.removeClass('current-slide');
  prevSlide.addClass('current-slide');

  if (!prevSlide.prev().length) {
    prevButton.addClass('hidden');
  }
});

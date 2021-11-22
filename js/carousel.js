const slideCollection = $('.carousel__slides');
const slides = $('.carousel__slide');
const nextButton = $('.carousel__button--right');
const prevButton = $('.carousel__button--left');
let slideWidth = 0;

const setPosition = (index, slide) => {
  console.log(slide);
  slide.style.left = `${slideWidth * index}px`;
};

function resizeCarousel() {
  slideWidth = slides[0].getBoundingClientRect().width;
  console.log(slideWidth);
  slides.each(setPosition);

  const currentSlide = $('.current-slide');
  slideCollection.css('transform', `translateX(-${currentSlide.css('left')})`);
}

resizeCarousel();
$(window).resize(resizeCarousel);

nextButton.bind('click', function () {
  const currentSlide = $('.current-slide');
  const nextSlide = currentSlide.next();

  slideCollection.css('transform', `translateX(-${nextSlide.css('left')})`);
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

  slideCollection.css('transform', `translateX(-${prevSlide.css('left')})`);
  nextButton.removeClass('hidden');
  currentSlide.removeClass('current-slide');
  prevSlide.addClass('current-slide');

  if (!prevSlide.prev().length) {
    prevButton.addClass('hidden');
  }
});

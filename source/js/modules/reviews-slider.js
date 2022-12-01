const reviewsSlider = () => {

  let slider = document.querySelector('.reviews__slider-container');

  if (slider) {
    let sliderReviews = new Swiper('.reviews__slider-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,

      navigation: {
        nextEl: '.reviews__btn-next',
        prevEl: '.reviews__btn-prev',
      },
      breakpoints: {
        541: {
          spaceBetween: 40,
        },
      }
    });
  }

};

export {reviewsSlider};

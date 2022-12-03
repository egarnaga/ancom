const productionCycleSlider = () => {

  let slider = document.querySelector('.production-cycle__slider-container');

  if (slider) {
    let productionSlider = new Swiper('.production-cycle__slider-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,

      navigation: {
        nextEl: '.production-cycle__btn-next',
        prevEl: '.production-cycle__btn-prev',
      },
    });
  }

};

export {productionCycleSlider};

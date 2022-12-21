const discountsSlider = () => {

  let slider = document.querySelector('.main-discounts__container');

  if (slider) {
    let sliderDiscounts = new Swiper('.main-discounts__container', {

      effect: 'fade',

      autoplay: {
        delay: 3000,
      },

      loop: true,

      //slidesPerView: 'auto',

      navigation: {
        nextEl: '.main-discounts__btn-next',
        prevEl: '.main-discounts__btn-prev',
      },

      pagination: {
        el: '.main-discounts__pagination',
        type: 'progressbar',
      },
    });
  }

};

export {discountsSlider};

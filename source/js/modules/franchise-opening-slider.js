const franchiseOpeningSlider = () => {

  let slider = document.querySelector('.franchise-opening__slider-container');

  if (slider) {
    let openingSlider = new Swiper('.franchise-opening__slider-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,

      navigation: {
        nextEl: '.franchise-opening__btn-next',
        prevEl: '.franchise-opening__btn-prev',
      },
      breakpoints: {
        541: {
          spaceBetween: 50,
        },
      }
    });
  }

};

export {franchiseOpeningSlider};

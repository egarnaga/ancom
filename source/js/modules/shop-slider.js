const shopSlider = () => {

  let slider = document.querySelector('.franchise-opening__slider-shop-container');

  let sliderShop;

  if (slider) {
    if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
      sliderShop = new Swiper('.franchise-opening__slider-shop-container', {
        slidesPerView: 'auto',
        spaceBetween: 2,
        pagination: {
          el: '.franchise-opening__slider-shop-pagination',
          type: 'progressbar',
        },
        centeredSlides: true,
        initialSlide: 1,
      });

      slider.dataset.mobile = 'true';
    }
  }


  if (slider) {
    window.addEventListener('resize', () => {

      if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
        sliderShop = new Swiper('.franchise-opening__slider-shop-container', {
          slidesPerView: 'auto',
          spaceBetween: 2,
          pagination: {
            el: '.franchise-opening__slider-shop-pagination',
            type: 'progressbar',
          },
          centeredSlides: true,
          initialSlide: 1,
        });

        slider.dataset.mobile = 'true';
      }

      if (window.innerWidth > 600) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
          sliderShop.destroy();
        }
      }

    });
  }

};

export {shopSlider};

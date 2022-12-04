const certificationSlider = () => {

  let slider = document.querySelector('.certification__slider');

  let sliderСertification;

  if (slider) {
    if (window.innerWidth <= 720 && slider.dataset.mobile == 'false') {
      sliderСertification = new Swiper('.certification__slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: '.certification__btn-next',
          prevEl: '.certification__btn-prev',
        },

      });

      slider.dataset.mobile = 'true';
    }
  }


  if (slider) {
    window.addEventListener('resize', () => {

      if (window.innerWidth <= 720 && slider.dataset.mobile == 'false') {
        sliderСertification = new Swiper('.certification__slider', {
          slidesPerView: 'auto',
          spaceBetween: 20,
          navigation: {
            nextEl: '.certification__btn-next',
            prevEl: '.certification__btn-prev',
          },

        });

        slider.dataset.mobile = 'true';
      }

      if (window.innerWidth > 720) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
          sliderСertification.destroy();
        }
      }

    });
  }

};

export {certificationSlider};

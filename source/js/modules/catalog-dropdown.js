const catalogDropdown = () => {

  const btn = document.querySelector('.catalog-header__button');
  const btnsList = document.querySelector('.catalog-header__list');


  btn.addEventListener('click', function () {
    if (btnsList.classList.contains('catalog-header__list--closed'
    )) {
      btnsList.classList.remove('catalog-header__list--closed');
      btnsList.classList.add('catalog-header__list--opened');
      btn.classList.remove('catalog-header__button--closed');
      btn.classList.add('catalog-header__button--opened');


    } else {
      btnsList.classList.add('catalog-header__list--closed');
      btnsList.classList.remove('catalog-header__list--opened');
      btn.classList.add('catalog-header__button--closed');
      btn.classList.remove('catalog-header__button--opened');
    }
  });

  window.addEventListener('resize', () => {
    if (btn) {
      if (window.innerWidth >= 700) {
        btn.disabled = true;

        if (btnsList.classList.contains('catalog-header__list--opened'
        ) & btn.classList.contains('catalog-header__button--opened'
        )) {
          btnsList.classList.add('catalog-header__list--closed');
          btnsList.classList.remove('catalog-header__list--opened');
          btn.classList.add('catalog-header__button--closed');
          btn.classList.remove('catalog-header__button--opened');
        }
      } else {
        btn.disabled = false;
      }
    }
  });

};

export {catalogDropdown};

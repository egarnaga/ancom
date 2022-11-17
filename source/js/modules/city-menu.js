const cityMenu = () => {

  const cityButton = document.querySelector('.main-nav__city-button');
  const buttonsList = document.querySelector('.main-nav__buttons-list');


  cityButton.addEventListener('click', function () {
    if (buttonsList.classList.contains('main-nav__buttons-list--closed'
    )) {
      buttonsList.classList.remove('main-nav__buttons-list--closed');
      buttonsList.classList.add('main-nav__buttons-list--opened');
      cityButton.classList.remove('main-nav__city-button--closed');
      cityButton.classList.add('main-nav__city-button--opened');


    } else {
      buttonsList.classList.add('main-nav__buttons-list--closed');
      buttonsList.classList.remove('main-nav__buttons-list--opened');
      cityButton.classList.add('main-nav__city-button--closed');
      cityButton.classList.remove('main-nav__city-button--opened');
    }
  });

};

export {cityMenu};

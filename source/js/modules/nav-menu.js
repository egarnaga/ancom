const navMenu = () => {
  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');
  const header = document.querySelector('.header');

  const body = document.querySelector('body');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed'
    )) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      header.classList.add('header--opened');
      body.classList.add('body-lock');
      header.classList.add('header__z-index');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      header.classList.remove('header--opened');
      body.classList.remove('body-lock');
      header.classList.remove('header__z-index');
    }
  });

  window.addEventListener('resize', () => {
    if (navToggle) {
      if (window.innerWidth > 768 && navMain.classList.contains('main-nav--opened')) {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
        header.classList.remove('header--opened');
        body.classList.remove('body-lock');
        header.classList.remove('header__z-index');
      }
    }
  });
};

export {navMenu};

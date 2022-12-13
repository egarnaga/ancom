const btnClose = () => {

  const cookie = document.querySelector('.cookie');

  if (cookie) {
    const closeBtn = document.querySelector('.cookie__close-btn');

    closeBtn.addEventListener('click', () => {
      cookie.classList.remove('cookie--active');
    });
  }
};

export {btnClose};

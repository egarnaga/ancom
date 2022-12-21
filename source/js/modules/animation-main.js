const animationMain = () => {

  const animation = document.querySelector('.main-animation');

  if (animation) {
    const timeline = gsap.timeline();
    const button = document.querySelector('.button');
    const body = document.querySelector('body');
    const wrapper = document.querySelector('.main-animation__wrapper');
    const cookie = document.querySelector('.cookie');

    function removeLock() {
          body.classList.remove('body-lock');
        }

    function addClass() {
      wrapper.classList.add('main-animation__wrapper--active');
    }

    function showCookie() {
      cookie.classList.add('cookie--active');
    }

    if (window.innerWidth >= 541) {

      button.addEventListener('click', btnAnimation);

      function btnAnimation() {

        timeline
          .to(".main-animation__first-plan", {duration: 4, x: 60})
          .to(".main-animation__second-plan-g", {duration: 4, x: 370}, '-= 4')
          .to(".main-animation__third-plan-g", {duration: 4, x: 530, y: -20}, '-= 4')
          .to(".main-animation__haze", {duration: 1, y: 100}, '-= 4')
          .to(".main-animation__haze", {delay: 1, duration: 1, y: -30}, '-= 4')
          .to(".main-animation__haze", {delay: 2, duration: 1, x: -50}, '-= 4')
          .to(".main-animation__haze", {delay: 3, duration: 1, x: -50, y: -60}, '-= 4')
          .to(".main-animation__cloud-left", {delay: 2, duration: 1, x: -50}, '-= 4')
          .to(".main-animation__cloud-left", {delay: 3, duration: 1, x: -50, y: -40}, '-= 4')
          .to(".main-animation__wrapper", {duration: 4, y: 90}, '-= 4')
          .to(".main-animation__cloud-right", {delay: 2, duration: 2, x: 150}, '-= 4')
          .to(".main-animation__haze-right", {duration: 1, scale: 2, x: -100, y: -50}, '-= 4')
          .to(".main-animation__mountain", {duration: 1, y: 50}, '-= 4');



        button.removeEventListener('click', btnAnimation);
        window.removeEventListener('wheel', wheelAnimation);



        setTimeout(removeLock, 4000);
        setTimeout(addClass, 4000);
        setTimeout(showCookie, 7000);

      }

      window.addEventListener('wheel', wheelAnimation);

      function wheelAnimation() {

        timeline
          .to(".main-animation__first-plan", {duration: 4, x: 60})
          .to(".main-animation__second-plan-g", {duration: 4, x: 370}, '-= 4')
          .to(".main-animation__third-plan-g", {duration: 4, x: 530, y: -20}, '-= 4')
          .to(".main-animation__haze", {duration: 1, y: 100}, '-= 4')
          .to(".main-animation__haze", {delay: 1, duration: 1, y: -30}, '-= 4')
          .to(".main-animation__haze", {delay: 2, duration: 1, x: -50}, '-= 4')
          .to(".main-animation__haze", {delay: 3, duration: 1, x: -50, y: -60}, '-= 4')
          .to(".main-animation__cloud-left", {delay: 2, duration: 1, x: -50}, '-= 4')
          .to(".main-animation__cloud-left", {delay: 3, duration: 1, x: -50, y: -40}, '-= 4')
          .to(".main-animation__wrapper", {duration: 4, y: 90}, '-= 4')
          .to(".main-animation__cloud-right", {delay: 2, duration: 2, x: 150}, '-= 4')
          .to(".main-animation__haze-right", {duration: 1, scale: 2, x: -100, y: -50}, '-= 4')
          .to(".main-animation__mountain", {duration: 1, y: 50}, '-= 4');

        window.removeEventListener('wheel', wheelAnimation);
        button.removeEventListener('click', btnAnimation);

        setTimeout(removeLock, 4000);
        setTimeout(addClass, 4000);
        setTimeout(showCookie, 7000);

      }
    } else {
      removeLock();
      setTimeout(showCookie, 3000);
    }

  }
};

export {animationMain};

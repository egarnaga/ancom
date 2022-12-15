const awardsTabs = () => {
  const awardsSlider = document.querySelector('.awards__slider-wrap');



  if (awardsSlider) {
    const $sliderWrap = $('.awards__slider-wrap');
    const $slider = $sliderWrap.find('.awards__slider');
    const $index = $slider.find('.awards__button');
    const $img = $slider.find('.awards__text');
    const sliderNum = $slider.length;
    let indexWidth = $index.width() + 1;
    let sliderWrapWidth = $sliderWrap.width();
    const duration = 300;

    $(window).on('resize', function() {
      sliderWrapWidth = $sliderWrap.width();
    });

    for(let i = 0; i < sliderNum; i++) {
      $slider.eq(i).css({
        left: i * indexWidth,
        width: sliderWrapWidth - (i * indexWidth)
      });
    }

    $index.on('click', function() {
      let num = $index.index(this);
      let start = sliderWrapWidth - (indexWidth * (sliderNum - num - 1));

      for(let i = num; i > 0; i--){
        $slider.eq(i).stop().animate({left: indexWidth * i}, duration, 'swing');
      }

      for(let i = num; i < sliderNum; i++) {
        $slider.eq(i + 1).stop().animate({left: start + (indexWidth * (i - num))}, duration, 'swing');
      }
    });
  }

};

export {awardsTabs};

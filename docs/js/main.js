function startSlider() {
  const sliderShow = document.querySelector('main');
  const sliderItem = sliderShow.querySelectorAll('li');
  const totalNum = sliderItem.length - 1;
  const roopTime = 5000;
  const fadeTime = 2000;

  let activeNum = 0;

  let nowSlide;
  let nextSlide;

  const showSlide = function(nowSlide, nextSlide) {
    nowSlide.classList.remove('appear', 'turn');
    nextSlide.classList.add('appear', 'zoom', 'turn');

    setTimeout(()=> {
      nowSlide.classList.remove('zoom');
    }, fadeTime);
  };

  sliderItem[0].classList.add('appear', 'zoom', 'turn');

  setInterval(()=>{
    if(activeNum < totalNum) {
      nowSlide = sliderItem[activeNum];
      nextSlide = sliderItem[++activeNum];

      showSlide(nowSlide, nextSlide);
    }else {
      nowSlide = sliderItem[activeNum];
      nextSlide = sliderItem[activeNum = 0];

      showSlide(nowSlide, nextSlide);
    };
  }, roopTime);
};

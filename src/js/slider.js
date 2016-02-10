/* делаем фоновый слайдер */

var descrLink = document.querySelector(".description__link");
var descr = document.querySelector(".description");
var dish = document.querySelector(".dish");
var slider = document.querySelector(".slider");


function dishSlider() {
  if (descrLink) {
    descrLink.addEventListener('click', function(event) {
      event.preventDefault();
      descr.classList.add('description--hide');
      dish.classList.add('dish--show');
      slider.classList.add('slider--show');
      $('.dish__wrap').slick({
          autoplay: true,
          dots: false,
          fade: true,
          autoplaySpeed: 15000,
          asNavFor: '.slider__wrap',
          arrows: false
      });
      $('.slider__wrap').slick({
          autoplay: true,
          dots: false,
          fade: true,
          autoplaySpeed: 15000,
          asNavFor: '.dish__wrap',
          arrows: false
      });
    });
  } 
}

dishSlider();
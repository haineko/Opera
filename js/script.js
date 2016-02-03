var loader = new PxLoader();
    loader.addImage('img/bg.jpg');
    loader.addImage('img/bg_curtain-left.png');
    loader.addImage('img/bg_curtain-right.png');
    loader.addImage('img/bg_slider.jpg');
    loader.addImage('img/logo-mini.png');
    loader.addImage('img/logo.png');
    loader.addImage('img/bg_main-header.png');
    loader.addImage('img/sprite.png');
var btn = document.querySelector(".entry__btn");
var curtain = document.querySelector(".curtain-back");
var enrty = document.querySelector(".entry");
 
loader.addCompletionListener(function() { 
    
    $(document).ready(function(){
      $('.banner').slick({
          autoplay: true,
          dots: true,
          autoplaySpeed: 2800,
          pauseOnDotsHover: true,
          arrows: false
      });
    });
    
    btn.addEventListener('click', function() {
      event.preventDefault();
      curtain.classList.add('curtain--hide');
      enrty.classList.add('entry--hide');
    });
});
 
loader.start();




      
/* поднятие занавеса */


///* слайдер */
//  var slider = document.querySelector(".banner");
//  var sliderItem = document.querySelector(".banner__slide");var slider = document.querySelector(".banner");
//  var toggles = slider.querySelectorAll(".banner__controls a");
//  var slides = slider.querySelectorAll('.banner__slide');
//  var togglesArray = getArray (toggles);
//  var slidesArray = getArray (slides);
//  console.log(slidesArray);
//
//
//function getArray (counter) {
//  for (i = 0; counter.length > i; i++) {
//    counter[i].setAttribute("data-number", i);
//  };
//  return counter;
//}
//
//function getClickedElement (evt) {
//  evt.preventDefault();
//  var element = evt.target;
//  var dataN = evt.target.getAttribute("data-number");
//  if (slidesArray.length > [+dataN]) {
//    clearClass('banner__label--active');
//    clearClass("slide-show");
//    evt.target.classList.add('banner__label--active');
//    slidesArray[+dataN].classList.add("slide-show");
//  }
//};
//
//function clearClass(classToCheck) {
//  var element = document.querySelector("." + classToCheck);
//  element.classList.remove(classToCheck);
//};
//slider.addEventListener('click', getClickedElement);
//  


/* поднятие занавеса */
  var btn = document.querySelector(".entry__btn");
  var curtain = document.querySelector(".curtain-back");
  var enrty = document.querySelector(".entry");
    
  btn.addEventListener('click', function() {
    event.preventDefault();
    curtain.classList.add('curtain--hide');
    enrty.classList.add('entry--hide');
  });

/* слайдер */
  var slider = document.querySelector(".banner");
  var sliderItem = document.querySelector(".banner__slide");var slider = document.querySelector(".banner");
var toggles = slider.querySelectorAll(".banner__controls a");
var slides = slider.querySelectorAll('.banner__slide');
var togglesArray = getArray (toggles);
var slidesArray = getArray (slides);
console.log(slidesArray);


function getArray (counter) {
  for (i = 0; counter.length > i; i++) {
    counter[i].setAttribute("data-number", i);
  };
  return counter;
}

function getClickedElement (evt) {
  evt.preventDefault();
  var element = evt.target;
  var dataN = evt.target.getAttribute("data-number");
  if (slidesArray.length > [+dataN]) {
    clearClass('banner__label--active');
    clearClass("slide-show");
    evt.target.classList.add('banner__label--active');
    slidesArray[+dataN].classList.add("slide-show");
  }
};

function clearClass(classToCheck) {
  var element = document.querySelector("." + classToCheck);
  element.classList.remove(classToCheck);
};
slider.addEventListener('click', getClickedElement);
  


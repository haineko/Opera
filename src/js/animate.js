var btn = document.querySelector(".entry__btn");
var curtain = document.querySelector(".curtain-back");
var enrty = document.querySelector(".entry");
    
  btn.addEventListener('click', function() {
    event.preventDefault();
    curtain.classList.add('curtain--hide');
    enrty.classList.add('entry--hide');
  });
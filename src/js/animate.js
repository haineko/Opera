var loader = new PxLoader();
    loader.addImage('img/bg.jpg');
    loader.addImage('img/bg_curtain-left.png');
    loader.addImage('img/bg_curtain-right.png');
    loader.addImage('img/bg_slider.jpg');
    loader.addImage('img/bg_opera.jpg');
    loader.addImage('img/bg_grand.jpg');
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
    
//    btn.addEventListener('click', function(event) {
//      event.preventDefault();
//      curtain.classList.add('curtain--hide');
//      enrty.classList.add('entry--hide');
//    });
    
//    initBackground();
});
 
loader.start();
upCurtain();

//function initBackground() {
//  
//  if (document.querySelector('.background--index')) {
//    console.log("элементы index!");
//    this.classList.add('background--show');
//    this.style.backgroundImage = "img/bg_slider.jpg";
////  } if (document.querySelector('.background--grand')) {
////    console.log("элементы grand");
////    $(".background").vegas({
////        slides: [
////            { src: "img/bg_grand.jpg" }
////        ]
////    });
////  } if (document.querySelector('.background--opera')) {
////    console.log("элементы opera!");
////    $(".background").vegas({
////        slides: [
////            { src: "img/bg_slider.jpg" },
////            { src: "img/bg_opera.jpg" },
////            { src: "img/bg_grand.jpg" }
////        ]
////    });
////  
//  } else {
//    console.log("элементы не найдены!");
//  }
//}

function upCurtain() {
  if (curtain) {
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      curtain.classList.add('curtain--hide');
      enrty.classList.add('entry--hide');
    });
  } else {
    console.log("занавеса нет!");
  }
}


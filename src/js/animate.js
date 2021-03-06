var loader = new PxLoader();
    loader.addImage('img/bg.jpg');
    loader.addImage('img/bg_curtain-left.png');
    loader.addImage('img/bg_curtain-right.png');
    loader.addImage('img/logo-mini.png');
    loader.addImage('img/logo.png');
    loader.addImage('img/bg_main-header.png');
    loader.addImage('img/bg_slider.jpg');
    loader.addImage('img/bg_bar.jpg');
    loader.addImage('img/bg_bar-capsa1.jpg');
    loader.addImage('img/bg_bar-capsa2.jpg');
    loader.addImage('img/bg_blackjack.jpg');
    loader.addImage('img/bg_buffet.jpg');
    loader.addImage('img/bg_buffet1.jpg');
    loader.addImage('img/bg_buffet-cake.jpg');
    loader.addImage('img/bg_buffet-fish.jpg');
    loader.addImage('img/bg_buffet-opera.jpg');
    loader.addImage('img/bg_chaliapine.jpg');
    loader.addImage('img/bg_chaliapine1.jpg');
    loader.addImage('img/bg_clubday.jpg');
    loader.addImage('img/bg_dish.png');
    loader.addImage('img/bg_grand.jpg');
    loader.addImage('img/bg_grand1.jpg');
    loader.addImage('img/bg_imperial.jpg');
    loader.addImage('img/bg_louis.jpg');
    loader.addImage('img/bg_louis1.jpg');
    loader.addImage('img/bg_louis-fish.jpg');
    loader.addImage('img/bg_louis-salad.jpg');
    loader.addImage('img/bg_louis-cake.jpg');
    loader.addImage('img/bg_louis-cake.jpg');
    loader.addImage('img/bg_opera.jpg');
    loader.addImage('img/bg_poker.jpg');
    loader.addImage('img/bg_pokerroom.jpg');
    loader.addImage('img/bg_pokerroom1.jpg');
    loader.addImage('img/bg_priviege.jpg');
    loader.addImage('img/bg_puntobanco.jpg');
    loader.addImage('img/bg_roulette.jpg');
    loader.addImage('img/bg_slider.jpg');
    loader.addImage('img/bg_stage.jpg');
    loader.addImage('img/bg_stage1.jpg');
    loader.addImage('img/sprite.png');
var btn = document.querySelector(".entry__btn");
var curtain = document.querySelector(".curtain-back");
var enrty = document.querySelector(".entry");
var dish = document.querySelector(".description__link");
var descr = document.querySelector(".description");
var curtainFooter = document.querySelectorAll(".curtain-footer");

var descrLink = document.querySelector(".description__link");
var descr = document.querySelector(".description");
var dish = document.querySelector(".dish");
var slider = document.querySelector(".slider--dish");
var myMap = document.getElementById("map");
//var click = 0;

loader.addCompletionListener(function() { 
    $('body').addClass('loaded');
    $(document).ready(function(){
      $('.banner').slick({
          autoplay: true,
          dots: true,
          autoplaySpeed: 2800,
          pauseOnDotsHover: true,
          arrows: false
      });
    });

});

function upCurtain() {
  if (curtain) {
    btn.addEventListener('click', function(event) {
      console.info('вход нажат');
      var click;
      click++;
      event.preventDefault();
      curtain.classList.add('curtain--hide');
      enrty.classList.add('entry--hide');
      for (var i = 0; i < curtainFooter.length; i++) {
        curtainFooter[i].classList.add('curtain-footer--show');
      }
    });
  } else {
    console.log("занавеса нет!");
  }
}

function dishSlider() {
  if (descrLink) {
    descrLink.addEventListener('click', function(event) {
      event.preventDefault();
      descr.classList.add('description--hide');
      dish.classList.add('dish--show');
      slider.classList.add('slider--show');
      $('.dish__wrap').slick({
          autoplay: true,
          dots: true,
          fade: true,
          autoplaySpeed: 9000,
          asNavFor: '.slider__wrap',
          arrows: false
      });
      $('.slider__wrap').slick({
          autoplay: true,
          dots: false,
          fade: true,
          autoplaySpeed: 9000,
          asNavFor: '.dish__wrap',
          arrows: false
      });
    });
  } 
}

//function stageSlider() {
//    if (document.querySelector(".background--stage")) {
//    console.log("я на сцене");
//      $('.dish__wrap').slick({
//          autoplay: true,
//          dots: false,
//          fade: true,
//          autoplaySpeed: 9000,
//          asNavFor: '.slider__wrap',
//          arrows: false
//      });
//      $('.slider__wrap').slick({
//          autoplay: true,
//          dots: false,
//          fade: true,
//          autoplaySpeed: 9000,
//          asNavFor: '.dish__wrap',
//          arrows: false
//      });
//  } 
//}

function Slider() {
  if ((document.querySelector(".background--opera")) || (document.querySelector(".background--grand")) || (document.querySelector(".background--chaliapine")) || (document.querySelector(".background--imperial")) || (document.querySelector(".background--louis")) || (document.querySelector(".background--stage"))){
      $('.slider__wrap').slick({
          autoplay: true,
          dots: false,
          fade: true,
          autoplaySpeed: 5000,
          arrows: false
      });

  } 
}

function Scroll() {
    if (document.querySelector(".scrollbar-inner")) {
    console.log("скролл есть!");
    jQuery(document).ready(function(){
      jQuery('.scrollbar-inner').scrollbar({
        autoScrollSize: false
      });
    });
  }
}
//function counterClick() {
//  if (document.querySelector(".map")) {
//    document.querySelector(".main-header__navlink").addEventListener('click', function (event) {
//      
//      event.preventDefault();
//      console.log(click);
//    });
//  }
//}
//function counterClick {
//  var click = 0;
//  enrty.addEventListener('click', function (e) {
//    console.info('вход нажат');
//    e.preventDefault();
//    click++;
//    console.info('нажато раз: ' + click);
//  });
//}

function initialize() {
    
      var myLatlng = new google.maps.LatLng(53.8924836,27.5782985);

      var myOptions = {
        zoom: 17,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: [
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#b5a57c"
        }, {
          "lightness": 39
        }
      ]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    }, {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    }, {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a29061"
        }
      ]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a29061"
        }
      ]
    }
  ],
        scrollwheel: false
      };
      var map = new google.maps.Map(document.getElementById("map"), myOptions); 
      var map_point = new google.maps.MarkerImage("img/map-point1.png", new google.maps.Size(164, 106), new google.maps.Point(0,0), new google.maps.Point(70, 53));	
      var nerds = new google.maps.LatLng(53.8924836,27.5782985);
      var marker = new google.maps.Marker({
        position: nerds,
        map: map,
        icon: map_point,
        title: "Casino Opera",
        zIndex: 8
      });
      google.maps.event.addListener(marker, "click", function() {
        document.location.href = "index.html";
      });
    
	}

if (myMap) {
	google.maps.event.addDomListener(window, "load", initialize);
} 

loader.start();
upCurtain();
dishSlider();
Slider();
Scroll();
//stageSlider();
//counterClick();
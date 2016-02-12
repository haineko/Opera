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
    loader.addImage('img/bg_buffet-cake.jpg');
    loader.addImage('img/bg_buffet-fish.jpg');
    loader.addImage('img/bg_buffet-opera.jpg');
    loader.addImage('img/bg_buffet-chaliapine.jpg');
    loader.addImage('img/bg_buffet-clubday.jpg');
    loader.addImage('img/bg_dish.png');
    loader.addImage('img/bg_grand.jpg');
    loader.addImage('img/bg_imperial.jpg');
    loader.addImage('img/bg_louis.jpg');
    loader.addImage('img/bg_louis-fish.jpg');
    loader.addImage('img/bg_louis-salad.jpg');
    loader.addImage('img/bg_louis-cake.jpg');
    loader.addImage('img/bg_louis-cake.jpg');
    loader.addImage('img/bg_opera.jpg');
    loader.addImage('img/bg_poker.jpg');
    loader.addImage('img/bg_pokerroom.jpg');
    loader.addImage('img/bg_priviege.jpg');
    loader.addImage('img/bg_puntobanco.jpg');
    loader.addImage('img/bg_roulette.jpg');
    loader.addImage('img/bg_slider.jpg');
    loader.addImage('img/bg_stage.jpg');
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
var slider = document.querySelector(".slider");
var myMap = document.getElementById("map");

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

});

function upCurtain() {
  if (curtain) {
    btn.addEventListener('click', function(event) {
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
      var map_point = new google.maps.MarkerImage("img/map-point.png", new google.maps.Size(69, 82), new google.maps.Point(0,0), new google.maps.Point(35, 41));	
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




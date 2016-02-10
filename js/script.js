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
var dish = document.querySelector(".description__link");
var descr = document.querySelector(".description");
 
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
    
//    $(document).ready(function(){
//      $('.slider').slick({
//          autoplay: true,
//          dots: false,
//          autoplaySpeed: 2600,
//        fade: true,
//        adaptiveHeight: true,
//          pauseOnDotsHover: true,
//          arrows: false
//      });
// 
//      $('.dish').slick({
//          autoplay: true,
//          dots: true,
//          autoplaySpeed: 2800,
//          pauseOnDotsHover: true,
//          arrows: false
//      });
//    });
//  $(".dish__wrap").vegas({
//        slides: [
//            { src: "img/bg_louis-salad.jpg" },
//            { src: "img/bg_louis-fish.jpg" },
//            { src: "img/bg_louis-cake.jpg" }
//        ]
//    });
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

//dish.addEventListener('click', function(event) {
//      event.preventDefault();
//      descr.classList.add('description--hide');
//      
//});

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
	google.maps.event.addDomListener(window, "load", initialize);


//var map;
//var egglabs = new google.maps.LatLng(50.4504996602356, 30.51102876663208);
//var mapCoordinates = new google.maps.LatLng(50.4504996602356, 30.51102876663208);
//
//
//var markers = [];
//var image = new google.maps.MarkerImage(
//    '9lessons.png',
//    new google.maps.Size(60,80),
//    new google.maps.Point(0,0),
//    new google.maps.Point(42,56)
//  );
//
//function addMarker() 
//{
//      markers.push(new google.maps.Marker({
//      position: egglabs,
//      raiseOnDrag: false,
//	    icon: image,
//      map: map,
//      draggable: false
//      }));
//      
//}
//
//function initialize() {
//  var mapOptions = {
//	backgroundColor: "#ffffff",
//    zoom: 14,
//	disableDefaultUI: true,
//    center: mapCoordinates,
//    mapTypeId: google.maps.MapTypeId.ROADMAP,
//	styles: [
//			  {
//			    "featureType": "landscape.natural",
//			    "elementType": "geometry.fill",
//			    "stylers": [
//			      { "color": "#OOO" }
//			    ]
//			  },
//				{
//				    "elementType": "labels.text",
//				    "stylers": [
//				      { "color": "#333333" }
//				    ]
//				  },{
//				    "featureType": "poi",
//				    "stylers": [
//				      { "visibility": "off" }
//				    ]
//				  }
//			
//			]
//    
//  };
//map = new google.maps.Map(document.getElementById('map'),mapOptions);
//addMarker();
// 
//}
//google.maps.event.addDomListener(window, 'load', initialize);
//
//    
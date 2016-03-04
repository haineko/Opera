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
//debugger;

    
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


//dish.addEventListener('click', function(event) {
//      event.preventDefault();
//      descr.classList.add('description--hide');
//      
//});


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
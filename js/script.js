function upCurtain(){curtain?btn.addEventListener("click",function(e){e.preventDefault(),curtain.classList.add("curtain--hide"),enrty.classList.add("entry--hide");for(var a=0;a<curtainFooter.length;a++)curtainFooter[a].classList.add("curtain-footer--show")}):console.log("занавеса нет!")}function dishSlider(){descrLink&&descrLink.addEventListener("click",function(e){e.preventDefault(),descr.classList.add("description--hide"),dish.classList.add("dish--show"),slider.classList.add("slider--show"),$(".dish__wrap").slick({autoplay:!0,dots:!0,fade:!0,autoplaySpeed:9e3,asNavFor:".slider__wrap",arrows:!1}),$(".slider__wrap").slick({autoplay:!0,dots:!1,fade:!0,autoplaySpeed:9e3,asNavFor:".dish__wrap",arrows:!1})})}function stageSlider(){document.querySelector(".background--stage")&&($(".description-stage").slick({autoplay:!0,dots:!1,fade:!0,autoplaySpeed:9e3,asNavFor:".slider__wrap",arrows:!1}),$(".slider__wrap").slick({autoplay:!0,dots:!1,fade:!0,autoplaySpeed:9e3,asNavFor:".description-stage",arrows:!1}))}function Slider(){(document.querySelector(".background--opera")||document.querySelector(".background--grand")||document.querySelector(".background--chaliapine")||document.querySelector(".background--imperial")||document.querySelector(".background--louis"))&&$(".slider__wrap").slick({autoplay:!0,dots:!1,fade:!0,autoplaySpeed:5e3,arrows:!1})}function Scroll(){document.querySelector(".scrollbar-inner")&&jQuery(document).ready(function(){jQuery(".scrollbar-inner").scrollbar({autoScrollSize:!1})})}function initialize(){var e=new google.maps.LatLng(53.8924836,27.5782985),a={zoom:17,center:e,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!0,styles:[{featureType:"landscape.man_made",elementType:"geometry",stylers:[{color:"#b5a57c"},{lightness:39}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",stylers:[{visibility:"simplified"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#a29061"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a29061"}]}],scrollwheel:!1},d=new google.maps.Map(document.getElementById("map"),a),o=new google.maps.MarkerImage("img/map-point1.png",new google.maps.Size(164,106),new google.maps.Point(0,0),new google.maps.Point(70,53)),r=new google.maps.LatLng(53.8924836,27.5782985),g=new google.maps.Marker({position:r,map:d,icon:o,title:"Casino Opera",zIndex:8});google.maps.event.addListener(g,"click",function(){document.location.href="index.html"})}var loader=new PxLoader;loader.addImage("img/bg.jpg"),loader.addImage("img/bg_curtain-left.png"),loader.addImage("img/bg_curtain-right.png"),loader.addImage("img/logo-mini.png"),loader.addImage("img/logo.png"),loader.addImage("img/bg_main-header.png"),loader.addImage("img/bg_slider.jpg"),loader.addImage("img/bg_bar.jpg"),loader.addImage("img/bg_bar-capsa1.jpg"),loader.addImage("img/bg_bar-capsa2.jpg"),loader.addImage("img/bg_blackjack.jpg"),loader.addImage("img/bg_buffet.jpg"),loader.addImage("img/bg_buffet1.jpg"),loader.addImage("img/bg_buffet-cake.jpg"),loader.addImage("img/bg_buffet-fish.jpg"),loader.addImage("img/bg_buffet-opera.jpg"),loader.addImage("img/bg_chaliapine.jpg"),loader.addImage("img/bg_chaliapine1.jpg"),loader.addImage("img/bg_clubday.jpg"),loader.addImage("img/bg_dish.png"),loader.addImage("img/bg_grand.jpg"),loader.addImage("img/bg_grand1.jpg"),loader.addImage("img/bg_imperial.jpg"),loader.addImage("img/bg_louis.jpg"),loader.addImage("img/bg_louis1.jpg"),loader.addImage("img/bg_louis-fish.jpg"),loader.addImage("img/bg_louis-salad.jpg"),loader.addImage("img/bg_louis-cake.jpg"),loader.addImage("img/bg_louis-cake.jpg"),loader.addImage("img/bg_opera.jpg"),loader.addImage("img/bg_poker.jpg"),loader.addImage("img/bg_pokerroom.jpg"),loader.addImage("img/bg_pokerroom1.jpg"),loader.addImage("img/bg_priviege.jpg"),loader.addImage("img/bg_puntobanco.jpg"),loader.addImage("img/bg_roulette.jpg"),loader.addImage("img/bg_slider.jpg"),loader.addImage("img/bg_stage.jpg"),loader.addImage("img/bg_stage1.jpg"),loader.addImage("img/sprite.png");var btn=document.querySelector(".entry__btn"),curtain=document.querySelector(".curtain-back"),enrty=document.querySelector(".entry"),dish=document.querySelector(".description__link"),descr=document.querySelector(".description"),curtainFooter=document.querySelectorAll(".curtain-footer"),descrLink=document.querySelector(".description__link"),descr=document.querySelector(".description"),dish=document.querySelector(".dish"),slider=document.querySelector(".slider--dish"),myMap=document.getElementById("map");loader.addCompletionListener(function(){$("body").addClass("loaded"),$(document).ready(function(){$(".banner").slick({autoplay:!0,dots:!0,autoplaySpeed:2800,pauseOnDotsHover:!0,arrows:!1})})}),myMap&&google.maps.event.addDomListener(window,"load",initialize),loader.start(),upCurtain(),Slider(),dishSlider(),stageSlider(),Scroll();
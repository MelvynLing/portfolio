/*=======================================
-----------------------------------------
            PRELOADER - JQUERY
-----------------------------------------
=========================================*/ 
$(window).on("load", function() { // <-- this makes sure the whole site is loaded.
    $("#status").fadeOut(function() {
        $('body').removeClass('loading');
    });
    $("#preloader").delay(350).fadeOut('slow');
});

/*=======================================
-----------------------------------------
        Skills/headshot - JQUERY
-----------------------------------------
=========================================*/ 
$(function(){
    $("#headshots").owlCarousel( {
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass:true,
        responsive: {
            0:{
            items: 1
        },
            990: {
            items: 2
        } }
    });
  });


/*=======================================
-----------------------------------------
    Progress bar animations on load
                - JQUERY
-----------------------------------------
=========================================*/
$(function(){
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 5000);
        });   
        this.destroy();
    }, {
        offset: 'middle-in-view'
    });
});
/*=======================================
-----------------------------------------
    Responsive tabs/Service2 section
                - JQUERY
-----------------------------------------
=========================================*/
$(function () {
    $('#services-tabs').responsiveTabs({
        // startCollapsed: 'accordion', 
        animation: 'slide'
    });
});
/*=======================================
-----------------------------------------
    Portfolio Section filter - JQUERY
-----------------------------------------
=========================================*/
$(window).on('load', function () {
    //initialliazes isotope filter plugin
        $("#isotope-containter").isotope({
        }); 
        //filter items on button click
        $("#isotope-filters").on('click', 'button', function() {
                //get filter value
                var filterValue = $(this).attr('data-filter');
                console.log(filterValue);
                //filter portfolio
                $("#isotope-containter").isotope({
                    filter: filterValue
                });
                //active button
                $("#isotope-filters").find('.active').removeClass('active');
                $(this).addClass('active');
        });
});
/*=======================================
-----------------------------------------
    home Section magnifier
             - JQUERY
-----------------------------------------
=========================================*/
// $(function () {

//     $("#portfolio-wrapper").magnificPopup({
//         delegate: 'a',
//         type:'image',
//         gallery: {
//             enabled: true
//         }
//     });

// });

/*=======================================
-----------------------------------------   
        Counter Plugin
-----------------------------------------

=========================================*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1000    
    });
});

/*=======================================
-----------------------------------------   
            Google Maps API data
-----------------------------------------
=========================================*/
$(window).on("load", function () {
    //locations
    var currentLocale = "Hamilton, Ontario, Canada";
    var myLatLng = {lat:43.255722, lng:-79.871101};
    //renders map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatLng
    });
    //renders marker for locale
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Click to See Address!"
    });
    var infowindow = new google.maps.InfoWindow({
        content: currentLocale
    });
    //show infowindow win user clicks on the map marker.
    marker.addListener('click', function () {
        infowindow.open(map,marker);
    });
    //setting the center of map on resize.
    //resizes map w/ evenlistener       // listening for the window/screen resize for googlemap
    google.maps.event.addDomListener(window, 'resize', function () {
        //once this happened, we are grabbing the center coordinates of the map 
        var center = map.getCenter();
        //this triggers the googlemap on resize to...
        google.maps.event.trigger(map,'resize');
        //set the center again to the old/original center coordinates
        map.setCenter(center);
    });
});
/*=======================================
-----------------------------------------   
            Navigation animation
-----------------------------------------
=========================================*/
/* show and hide white nav bad*/
$(function () {
        showHideNav();
    ///excute this function when the window scrolls
    $(window).scroll(function() {
        showHideNav();
    });

    function showHideNav() {
        if( $(window).scrollTop() > 50 ) {
            //shows white nav with darker logo
            $("nav").addClass("white-nav-top");

            //shows back to top btn when viewport is off home section
            $("#back-to-top").fadeIn();
        } else {
            $("nav").removeClass("white-nav-top");
            //hides back to top btn when viewport is off home section
            $("#back-to-top").fadeOut();
        }
    }
});
/*=======================================
-----------------------------------------   
        smooth scrolling animation
-----------------------------------------
=========================================*/

$(function () {
    $("a.smooth-scroll").click(function (event) {
        
        event.preventDefault();

        //grab section id -> #about, #home, #portfolio, etc
        var sectionID = $(this).attr("href");
        $("html, body").animate({ 
            scrollTop: $(sectionID).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});

/*=======================================
-----------------------------------------   
        smooth scrolling animation
-----------------------------------------
=========================================*/

    $(function () {
        //shows mobile navigation
        $('#mobile-nav-open-btn').click(function(){
            $('#mobile-nav').css("height","100%");
        //hides mobile nav
        $('#mobile-nav-close-btn, #mobile-nav a').click(function(){
            $('#mobile-nav').css("height","0%");
            });
        });
    });
/*=======================================
-----------------------------------------   
           Animations
-----------------------------------------
=========================================*/

//ANIMATIONS ON SCOLL
$(function () {
    new WOW().init();
});

$(window).on('load', function () {
    //home section
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-strips").addClass("animated zoomIn");
    $("#home-heading-2").addClass("animated fadeInUp");
    $("#home-text").addClass("animated fadeInLeft");
    $("#home-btn").addClass("animated fadeInRight");
    $("#arrow-down i").addClass("animated fadeInDown infinite");


});
/*=======================================
-----------------------------------------
            PRELOADER - JQUERY
-----------------------------------------
=========================================*/ 
$(window).on("load", function() { // <-- this makes sure the whole site is loaded.
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});

/*=======================================
-----------------------------------------
        Skills/headshot - JQUERY
-----------------------------------------
=========================================*/ 
$(function(){
    $("#headshots").owlCarousel( {
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]  
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
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 1000);
        });   
        this.destroy();
    }, {
        offset: 'bottom-in-view'
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
    Portfolio Section - JQUERY
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
                $("#isotope-filters").find('.active').removeClass('active')
                $(this).addClass('active');
        });
});
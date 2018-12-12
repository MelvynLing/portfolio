/*=======================================
-----------------------------------------
            PRELOADER - JQUERY
-----------------------------------------
=========================================*/ 
$(window).on("load", function() { // <-- this makes sure the whole site is loaded.
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});
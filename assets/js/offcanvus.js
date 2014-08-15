/*
* Uses jQuery!!!!111one
*/


/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
  
    // Toggle Nav on Click
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });

});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('body').hasClass('show-nav')) {
        // Do things on Nav Close
        $('body').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('body').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}
(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.button-collapse').sideNav();
    $('.modal-trigger').leanModal();
    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            gutter: 0, // Spacing from edge
            belowOrigin: true, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
    );
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });


});

$('.head-link').click(function(e) {
    e.preventDefault();

    var goto = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(goto).offset().top
    }, 800);
});
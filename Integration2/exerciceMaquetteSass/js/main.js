// main.js
// Par Anne Moncion
// Dernière modification: 18 juillet 2020

hauteurTotale = 0;

$( document ).ready(function() {
    $( ".post" ).each(function() {
        hauteurTotale += ($(this).outerHeight());
    });

    $(".posts").css("height", hauteurTotale/2 + 600);
});


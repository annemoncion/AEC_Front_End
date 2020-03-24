/* https://codepen.io/vajkri/pen/grgQmb */
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.bgBouge').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;

});

moveBackground();


/* Jeu association d'icônes */
let compteCase = 0;

$(".icone").click(function() {
    let nomIcone = $(this).attr('id');
    $(this).addClass("cacher");
    $("#case" + compteCase).html('<i id="' + nomIcone + 'Inventaire" class="iconeInventaire fas fa-' + nomIcone + '" draggable="true" ondragstart="drag(event)"></i>');
    compteCase++;

    if (compteCase > 0) {
        $(".inventaire").css("display", "block");
    }
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

let associations = 0;
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(ev.target.id);
    console.log(data);
    if (ev.target.id === "emplacementMouse" && data === "mouseInventaire") {
        ev.target.appendChild(document.getElementById(data));
        associations++;
        $("#mouseInventaire").addClass("iconePoser");
        $("#emplacementMouse").addClass("emplacementCombler");
    }
    if (ev.target.id === "emplacementUser" && data === "userInventaire") {
        ev.target.appendChild(document.getElementById(data));
        associations++;
        $("#userInventaire").addClass("iconePoser");
        $("#emplacementUser").addClass("emplacementCombler");
    }
    if (ev.target.id === "emplacementPuzzle" && data === "puzzle-pieceInventaire") {
        ev.target.appendChild(document.getElementById(data));
        associations++;
        $("#puzzle-pieceInventaire").addClass("iconePoser");
        $("#emplacementPuzzle").addClass("emplacementCombler");
    }
    if (ev.target.id === "emplacementBinoculars" && data === "binocularsInventaire") {
        ev.target.appendChild(document.getElementById(data));
        associations++;
        $("#binocularsInventaire").addClass("iconePoser");
        $("#emplacementBinoculars").addClass("emplacementCombler");
    }
    console.log(associations)
    if (associations === 4) {
        $("#boutonJeu").removeClass("cacher");
        $("#boutonJeu").css("display", "flex");
        $(".inventaire").css("display", "none");
    }

}



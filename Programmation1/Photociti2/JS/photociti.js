let validation = false;
let nbCaracteres = 0;
let ancienCol = "";
let motPhoto = [];
let altPhoto = [];
let srcPhoto = [];
let couleurFond = "blanc";
let ancienFond = "blanc";
let lettreAChanger = "";
let idLettre = "";
let choixPhoto = "";

function alphabetLatin(str) {
    return (/^[a-zA-ZàâçéèêëîïôùûÀÂÇÉÈÊËÎÏÔÙÛ*]+$/.test(str));
}

$("#inputMot").keyup(function() {
    let mot = $("#inputMot").val();
    if (mot.length < 3 || mot.length > 12) {
        $("#erreurLongueur").css("display", "block");
        validation = false;
    }
    else if (alphabetLatin(mot) == false) {
        $("#erreurCaractere").css("display", "block");
        validation = false;
    }
    else {
        $("#erreurCaractere").css("display", "none");
        $("#erreurLongueur").css("display", "none");
        validation = true;
        nbCaracteres = mot.length;
    }
});

function effacerAncienMot() {
    for (i = 0; i < 12; i++) {
        $("#contenantImage" + (i+1)).css("display", "none");
        if ($("#contenantImage" + (i+1)).hasClass(ancienCol)) {
            $("#contenantImage" + (i+1)).removeClass(ancienCol);
        }
    }
}

function ajusterColBootstrap() {
    for (i = 0; i < (nbCaracteres); i++) {
        if (nbCaracteres === 3) {
            $("#contenantImage" + (i+1)).addClass("col-4");
            ancienCol = "col-4";
        }
        else if (nbCaracteres === 4) {
            $("#contenantImage" + (i+1)).addClass("col-3");
            ancienCol = "col-3";
        }
        else if (nbCaracteres === 5 || nbCaracteres === 6) {
            $("#contenantImage" + (i+1)).addClass("col-2");
            ancienCol = "col-2";
        }
        else if (nbCaracteres > 6) {
            $("#contenantImage" + (i+1)).addClass("col-1");
            ancienCol = "col-1";
        }
    }

}

function nettoyerMot() {
    let mot = $("#inputMot").val();

    motPhoto = mot.toUpperCase().split("");

    for (i = 0; i < motPhoto.length; i++) {
        if (motPhoto[i] === "É" || motPhoto[i] === "È" || motPhoto[i] === "Ê" || motPhoto[i] === "Ë") {
            motPhoto[i] = "E";
        }
        else if (motPhoto[i] === "À" || motPhoto[i] === "Â") {
            motPhoto[i] = "A";
        }
        else if (motPhoto[i] === "Ç") {
            motPhoto[i] = "C";
        }
        else if (motPhoto[i] === "Î" || motPhoto[i] === "Ï") {
            motPhoto[i] = "I";
        }
        else if (motPhoto[i] === "Ô") {
            motPhoto[i] = "O";
        }
        else if (motPhoto[i] === "Û" || motPhoto[i] === "Ù") {
            motPhoto[i] = "U";
        }
        else if (motPhoto[i] === "*") {
            motPhoto[i] = "CS";
        }
    }
}

function transformerMotEnImage() {
    for (i = 0; i < motPhoto.length; i++) {
        altPhoto[i] = motPhoto[i];
        srcPhoto[i] = "letters/" + motPhoto[i] + "/" + motPhoto[i] + "1.jpg";
    }
}

$("#genererMot").submit(function(event) {
    event.preventDefault();
    if (validation) {

        $(".titreApercu").removeClass("cacher");
        $(".changerFond").removeClass("cacher");

        effacerAncienMot();
        ajusterColBootstrap();
        nettoyerMot();
        transformerMotEnImage();

        for (i = 0; i < motPhoto.length; i++) {
            $("#lettre" + (i+1)).attr("src", srcPhoto[i]);
            $("#lettre" + (i+1)).attr("alt", altPhoto[i]);
            $("#contenantImage" + (i+1)).css("display", "flex");
        }
    }
});

$(".couleur").click(function() {
    couleurFond = $(this).attr("id");
    $("#" + ancienFond).removeClass("active");
    $(this).addClass("active");
    $(".apercuMot").css("background-image", "url('background/" + couleurFond + ".jpg')");
    ancienFond = $(this).attr("id");
});

$(".lettre").click(function() {
    // Remettre à zéro toutes les valeurs stockées
    for (i = 0; i < 5; i++) {
        if ($("#imgCarousel" + (i+1)).hasClass("active")) {
            $("#imgCarousel" + (i+1)).removeClass("active");
        }
    }
    idLettre = "";
    choixPhoto = "";
    $("#erreurModif").hide();

    lettreAChanger = $(this).attr("alt");
    idLettre = $(this).attr("id");
    for (i = 0; i < 5; i++) {
        $("#imgCarousel" + (i+1)).attr("src", "letters/" + lettreAChanger + "/" + lettreAChanger + (i+1) + ".jpg");
    }
});

$(".carousel-item img").click(function() {
    for (i = 0; i < 5; i++) {
        if ($("#imgCarousel" + (i+1)).hasClass("active")) {
            $("#imgCarousel" + (i+1)).removeClass("active");
        }
    }
    $("#erreurModif").hide();
    choixPhoto = $(this).attr("src");
    $(this).addClass("active");
});

$("#boutonSauvegarder").click(function() {
    if (choixPhoto != "") {
        $("#" + idLettre).attr("src", choixPhoto);
        $('#modifierLettre').modal('hide');
    }
    else {
        $("#erreurModif").show();
    }
})


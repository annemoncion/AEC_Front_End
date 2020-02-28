// Avancer et reculer
let deplacement = 0;
$("#boutonDroite").click(function(){
    if (deplacement <= 1400) {
        deplacement += 200;
        $("#flashID").animate({
            left: deplacement,
        }, 200, function() {
            // Animation complete.
        });
    }
});

$("#boutonGauche").click(function(){
    if (deplacement >= -100) {
        deplacement -= 200;
        $("#flashID").animate({
            left: deplacement,
        }, 200, function() {
            // Animation complete.
        });
    }
});

//Changer l'image, l'enlever ou l'ajouter
$("#boutonChangerImage").click(function() {
    if ($("#flashID").attr("src") == "img/Flash1.png") {
        $("#flashID").attr("src", "img/Flash2.png");
    }
    else {
        $("#flashID").attr("src", "img/Flash1.png");
    }
});

$("#boutonEnleverImage").click(function() {
    $("#flashID").css("display", "none");
});

$("#boutonAjouterImage").click(function() {
    $("#flashID").css("display", "inline");
});

//Ajouter un attribut à l'image
$("#boutonAjouterAttribut").click(function() {
    $("#flashID").attr("alt", "Photo de Flash");
});

//Ajouter un titre à la page s'il n'existe pas déjà
$("#boutonAjouterTitre").click(function() {
    if (document.getElementById("titre")) {
        // Ne rien faire.
    }
    else {
        $("#flashID").before("<h1 id='titre'>Justice League</h1>");
    }
});

//Dupliquer Flash Ou Enlever la dernière copie de Flash qui a été ajoutée.
let copie = 0;
$("#boutonDupliquer").click(function(){
    let idCopie = "id='copie" + copie + "'";
    let image = "<img " + idCopie + " class='flashClass' src='img/Flash1.png' width='200px' />";
    $("#flashID").after(image);
    copie++;
});

$("#boutonRalentir").click(function(){
    if (copie > 0) {
        let copieActuelle = copie - 1;
        let idCopieActuelle = 'copie' + copieActuelle;
        $("#" + idCopieActuelle).remove();
        copie--;
    }
});

// Téléportation
let positionInitiale = true;
$("#boutonTeleport").click(function() {
    if (positionInitiale) {
        $("#flashID").animate({
            top: "700px",
        }, 1, function() {
            // Animation complete.
        });
        positionInitiale = false;
    }
    else {
        $("#flashID").css("top", "0");
        positionInitiale = true;
    }
});

// Vitesse suprême
$("#boutonVitesseSupreme").click(function() {
    function loop() {
        $('#flashID').css({opacity:1});
        $('#flashID').animate ({
            opacity: "0"
        }, 500, function() {
            loop();
        });
    }
    loop();
});

$("#boutonFinVitesseSupreme").click(function() {
    $("#flashID").stop();
    $("#flashID").css('opacity', '1');
});


// Explosion de la ville
$("#boutonNuke").click(function() {
    $("#centralCity").after('<div id="explosion" class="row h-100"></div>');
    $("#centralCity").remove();
});


//Grossir ou rapetisser Flash
let grosseurInit = true;
$("#boutonPerso1").click(function() {
    if (grosseurInit) {
        $("#flashID").attr("width", "400px");
        grosseurInit = false;
    }
    else {
        $("#flashID").attr("width", "200px");
        grosseurInit = true;
    }
});

//Lancer un éclair
$("#boutonPerso2").click(function() {
    $("#flashID").after("<div id='eclair'></div>");
    $("#eclair").animate ({
        left: "2000px"
    }, 500, function() {
    });
});

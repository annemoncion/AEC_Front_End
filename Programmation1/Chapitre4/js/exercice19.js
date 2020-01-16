/* Charivari… vous connaissez? C'est le jeu qui mêle des lettres et
le joueur doit trouver le mot!!

Consignes:

Entrez le mot à trouver;
Mélangez les lettres au hasard;
Affichez le mot mélangé;
Affichez tous les essais;

Félicitez le joueur quand il a la bonne réponse.
Ajoutez une touche pour obtenir la réponse du mot recherché
lorsque l’usager voudra connaître un mot qu’il ne peut trouver. */

var reponse = "sorcellerie";
var lettresReponse = [];
var melange;
var essai = "";

// Séparer toutes les lettres du mot à trouver OK
for (var i = 0; i < reponse.length; i++) {
    lettresReponse.push(reponse[i]);
}

// Mélanger les lettres OK
for (var i = 0; i < lettresReponse.length; i++) {
    var r = Math.floor((Math.random() * 10));
    var temp = lettresReponse[i];
    lettresReponse[i] = lettresReponse[r];
    lettresReponse[r] = temp;
}

// Ressouder les lettres mélangées pour former le nouveau mot à afficher OK
melange = lettresReponse.join(" ");

document.write("<strong>Essais: </strong><br>");

while (essai != reponse && essai != 'S') {
    essai = prompt("Remettez les lettres dans l'ordre: " + melange + " Si vous voulez la réponse, appuyez sur 'S'.");
    if ( essai !== "S" ) {
        document.write(essai + "<br>");
    }
    console.log(essai);
}

if ( essai === 'S' ) {
    document.write("<br>La réponse était: " + reponse);
}
else if ( essai === reponse ) {
    document.write("<br> Bravo! Vous avez trouvé.");
}




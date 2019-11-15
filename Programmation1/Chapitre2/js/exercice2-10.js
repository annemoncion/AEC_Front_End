// Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur
var backgroundColor = "white";
var color = "black";
var couleurFond = prompt("Entrez une couleur de fond. Vous avez les trois choix suivants: bleu, vert ou rouge.")
var couleurTexte = prompt("Entrez une couleur de texte. Vous avez les trois choix suivants: jaune, rose ou gris.");
var erreurFond = "Attention. Les trois couleurs de fond disponibles sont 'bleu', 'vert' et 'rouge'.";
var erreurTexte = "Attention. Les trois couleurs de texte disponibles sont 'jaune', 'rose' et 'gris'.";

//Déterminer la couleur du fond.
if ( couleurFond.toUpperCase() === "BLEU" || couleurFond.toUpperCase() === "BLUE" ) {
    backgroundColor = "blue";
} else if ( couleurFond.toUpperCase() === "VERT" || couleurFond.toUpperCase() === "GREEN" ) {
    backgroundColor = "green";
} else if ( couleurFond.toUpperCase() === "ROUGE" || couleurFond.toUpperCase() === "RED" ) {
    backgroundColor = "red";
} else {
    document.write(erreurFond);
}

//Déterminer la couleur du texte.
if ( couleurTexte.toUpperCase() === "JAUNE" || couleurTexte.toUpperCase() === "YELLOW" ) {
    color = "yellow";
} else if ( couleurTexte.toUpperCase() === "ROSE" || couleurTexte.toUpperCase() === "PINK" ) {
    color = "pink";
} else if ( couleurTexte.toUpperCase() === "GRIS" || couleurTexte.toUpperCase() === "GREY" ) {
    color = "grey";
} else {
    document.write(erreurTexte);
}

//Exemple de texte avec les couleurs choisies.
document.write("<div style='background-color:" + backgroundColor + "; color:" + color + "; font-size: 2em; padding: 40px;'>Exemple de texte !</div>");

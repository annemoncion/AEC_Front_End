// Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur
var couleurFond = prompt("Entrez une couleur de fond. Vous avez les trois choix suivants: bleu, vert ou rouge.")
var couleurTexte = prompt("Entrez une couleur de texte. Vous avez les trois choix suivants: jaune, rose ou gris.");

if ( couleurFond.toUpperCase() === "BLEU" ) {

}

/*
document.write("Cliquez sur la couleur de fond de votre choix:")
document.write("<div id='fond1' style='background-color:" + couleur1 + "; height: 40px; width: 40px; margin: 20px;'></div>" );
document.write("<div id='fond2' style='background-color:" + couleur2 + "; height: 40px; width: 40px; margin: 20px'></div>" );
document.write("<div id='fond3' style='background-color:" + couleur3 + "; height: 40px; width: 40px; margin: 20px'></div>" );

document.write("Cliquez sur la couleur de texte de votre choix:")
document.write("<div id='fond1' style='background-color:" + couleur1 + "; height: 40px; width: 40px; margin: 20px;'></div>" );
document.write("<div id='fond2' style='background-color:" + couleur2 + "; height: 40px; width: 40px; margin: 20px'></div>" );
document.write("<div id='fond3' style='background-color:" + couleur3 + "; height: 40px; width: 40px; margin: 20px'></div>" );
 */

document.write("<div style='background-color:" + fond + "; color:" + texte + "; padding: 40px;'>Exemple de texte !</div>");

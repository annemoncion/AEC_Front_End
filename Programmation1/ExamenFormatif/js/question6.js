/* 	Vous devez compléter un programme qui permet de calculer la facture pour l’achat d’un robot imprimable en 3 dimensions.

L’usager doit sélectionner le contrôleur
55$ pour un RaspBerry Pi
15$ pour un Raspberry Pi Zero

L’usager doit décider du nombre de moteurs entre 2 et 24.
Un moteur coûte 5$

L’usager décide s’il veut une caméra USB ou non
La caméra coûte 35$

L’usager décide s’il veut une matrice de LEDS pour les yeux
La matrice coûte 10$ pour les deux yeux.

Il faut ensuite ajouter 20$ pour le filament 3D.
Il faut ajouter 15$ pour la batterie USB.


RasPiBot aimerait que votre programme affiche

un résumé de l’achat
ex: “Robot avec Raspberry Pi Zero, 10 moteurs, pas de caméra, pas de matrice de LEDS.”
le prix
le prix avec la livraison de 15%.
 */

var controleur = prompt("Voulez-vous un contrôleur RaspBerry Pi (tapez 'P') ou un contrôleur Raspberry Pi Zero (tapex 'Z')?");
var prixControleur = 0;
var nombreMoteurs = prompt("Combien de moteurs voulez-vous ? Vous pouvez avoir de 2 à 24 moteurs.");
var prixMoteurs;
var camera = prompt("Désirez-vous une caméra USB ? (Tapez 'O' pour oui, 'N' pour non");
var prixCamera = 0;
var matriceLeds = prompt("Désirez-vous une matrice de LEDS pour les yeux? (Tapez 'O' pour oui, 'N' pour non)");
var prixMatrice = 0;
var prixFilament3D = 20;
var prixBatterieUSB = 15;
var prixTotal;
var prixAvecLivraison
var erreur = false;

if (controleur.toUpperCase() === "P") {
    controleur = "Raspberry Pi";
    prixControleur = 55;
} else if (controleur.toUpperCase() === "Z") {
    controleur = "Raspberry Pi Zero"
    prixControleur = 15;
} else {
    document.write("Votre choix de contrôleur n'est pas valide.");
    erreur = true;
}

if (nombreMoteurs < 2 || nombreMoteurs > 24) {
    document.write("Le nombre de moteurs entré n'est pas valide.")
    erreur = true;
}

if (camera.toUpperCase() === "O") {
    camera = ", avec caméra USB"
    prixCamera = 35;
} else if (camera.toUpperCase() === "N") {
    camera = ", pas de caméra USB";
    prixCamera = 0;
} else {
    document.write("Votre choix de caméra n'est pas valide.");
    erreur = true;
}

if (matriceLeds.toUpperCase() === "O") {
    matriceLeds = ", matrice de LEDS"
    prixMatriceLeds = 10;
} else if (matriceLeds.toUpperCase() === "N") {
    matriceLeds = ", pas de matrice de LEDS";
    prixMatriceLeds = 0;
} else {
    document.write("Votre choix de matrice de LEDS n'est pas valide.");
    ereur = true;
}

prixMoteurs = nombreMoteurs * 5;
prixTotal = prixControleur + prixCamera + prixMoteurs + prixMatrice + prixBatterieUSB + prixFilament3D;
prixAvecLivraison = Math.round((prixTotal + (prixTotal * 15 / 100))*100)/100;

if (erreur === false) {
    document.write("Résumé de l'achat: Robot avec " + controleur + ", " + nombreMoteurs + " moteurs" + camera + matriceLeds + ".");
    document.write("<br>Prix total: " + prixTotal + "$");
    document.write("<br>Prix avec livraison: " + prixAvecLivraison + "$");
}



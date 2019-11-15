//Exercice 11 : w = avancer, s = reculer, a = gauche, d = droite
var commande;
var message;

commande = prompt("Entrer une commande");

if (commande == "w") {
    message = "Avancer";
} else if (commande == "a") {
    message = "Gauche";
} else if (commande == "s") {
    message = "Reculer";
} else if (commande == "d") {
    message = "Droite";
} else {
    message = "Erreur. Cette commande est invalide."
}

console.log(message);
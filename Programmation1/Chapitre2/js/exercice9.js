//Exercice 9 : Nom d'utiliseur "admin" et mot de passe "12345", sinon "invalide"

var nomUtilisateur;
var motDePasse;
var message;

nomUtilisateur = prompt("Nom d'utilisateur");
motDePasse = prompt("Mot de passe");

if (nomUtilisateur == "admin" && motDePasse == "12345") {
    message = "Bonjour " + nomUtilisateur;
} else {
    message = "Votre nom d'utilisateur ou votre mot de passe est invalide.";
}

console.log(message);
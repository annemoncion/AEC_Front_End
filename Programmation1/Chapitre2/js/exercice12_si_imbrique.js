//Exercice 12 (Si imbriqués) Calculer le prix des assurances pour un véhicule
// G 16 à 25 ans = 5%, sinon 3%; F 16 à 25 ans = 3% sinon 2%

var sexe;
var age;
var valeur;
var prime;
var messageErreur;

sexe = prompt("Êtes-vous une fille ou un garçon ? (Entrez F / G)");
age = Number(prompt("Entrez votre âge"));
valeur = Number(prompt("Entrez le prix du véhicule"));

//Calculer le taux d'assurances selon le sexe et l'âge
messageErreur = "";
prime = 0;
if (valeur <= 0) {
    messageErreur = "La valeur du véhicule est invalide. Techniquement, elle devrait être supérieure à 0.";
} else if (isNaN(valeur)) {
    messageErreur = "Le champ Prix du véhicule n'accepte que des nombres."
} else {
    if (sexe.toUpperCase() === "F") {
        if (16 <= age && age <= 25) {
            prime = valeur * 0.03;
        } else if (age > 25 && age < 120) {
            prime = valeur * 0.02;
        } else if (age < 16 && age > 0) {
            messageErreur = "Il semblerait que vous ne soyez pas en âge de conduire.";
        } else {
            messageErreur = "Le champ Âge n'accepte que des nombres entre 0 et 120."
        }
    } else if (sexe.toUpperCase() === "G") {
        if (16 <= age && age <= 25) {
            prime = valeur * 0.05;
        } else if (age > 25 && age < 120) {
            prime = valeur * 0.03;
        } else if (age < 16 && age > 0) {
            messageErreur = "Il semblerait que vous ne soyez pas en âge de conduire.";
        } else {
            messageErreur = "Le champ Âge n'accepte que des nombres entre 0 et 120.";
        }
    } else {
        messageErreur = "Sexe entré invalide. Pardon, le système est arriéré et n'accepte pas les personnes se définissant comme trans ou non-genrées.";
    }
}

prime = Math.round(prime * 100) / 100;

//Validation

if (messageErreur != "") {
    document.write(messageErreur);
} else if (messageErreur === "" && sexe.toUpperCase() === "G") {
    document.write('<p style="color:green;"> Votre prime est de: ' + prime + '$.</p>');
} else {
    document.write('<p style="color:magenta;"> Votre prime est de: ' + prime + '$.</p>');
}

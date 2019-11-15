// Lire l’âge d’un individu et afficher le mot :
// « Adulte » si l’âge est >= 18 ans
// « Adolescent » si l’âge est compris entre 12 et 17 ans inclusivement
// « Enfant » si l’âge est < 12 ans.

var age = Number(prompt("Veuillez entrer votre âge."));
var groupeAge;

if ( age >= 18 ) {
    groupeAge = "adulte";
} else if ( age >= 12 && age <= 17 ) {
    groupeAge = "adolescent";
} else {
    groupeAge = "enfant";
}

document.write("Vous êtes un " + groupeAge);
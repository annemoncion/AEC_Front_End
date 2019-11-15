//Exercice 8 : Faire un programme qui lit le taux horaire d'un employé. (+ 40 hrs = temps double)

var heuresTravaillees;
var tauxHoraire;
var salaireTempsDouble;
var salaireSemaine;

heuresTravaillees = Number (prompt("Nombre d'heures travaillées cette semaine"));
tauxHoraire = Number (prompt("Taux horaire"));

salaireTempsDouble = 0;
if (heuresTravaillees > 40) {
    salaireTempsDouble = (heuresTravaillees - 40) * tauxHoraire;
}

salaireSemaine = tauxHoraire * heuresTravaillees + salaireTempsDouble;

console.log("Salaire pour la semaine: " + salaireSemaine + "$");
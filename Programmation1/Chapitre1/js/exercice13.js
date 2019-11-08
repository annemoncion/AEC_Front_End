/* Exercice 13
Lire les quatre éléments d’information suivants :
le nom de l’étudiant,
la note de laboratoire, (compte pour 20%)
la note de l’examen de mi-session  (compte pour 30%)
la note de l’examen de fin de session. (compte pour 50%)

Toutes les notes lues sont sur 100.

Affiche le nom suivi des trois notes lues qui ont été ramenées sur le pourcentage demandé ci-dessus,
et de la note finale. Le tout sur des lignes différentes accompagné de messages clairs.
 */
var noteLab;
var noteMiSession;
var noteExamenFinal;
var noteFinale;

noteLab = Number(prompt("Entrer la note de l'élève pour ses laboratoires."));
noteMiSession = Number(prompt("Entrer la note de l'élève à l'examen de mi-session."));
noteExamenFinal = Number(prompt("Entrer la note de l'élève à l'examen final."));

//Ramener la note des labos sur 20
noteLab = Math.round((noteLab * 20 / 100) * 100) / 100;
//Ramener la note de l'examen de mi-session sur 30
noteMiSession = Math.round((noteMiSession * 30 / 100) * 100) / 100;
//Ramener la note de l'examen final sur 50
noteExamenFinal = Math.round((noteExamenFinal * 50 / 100) * 100) / 100;
//Calculer la note finale
noteFinale = noteLab + noteMiSession + noteExamenFinal;

console.log("La note aux laboratoires est " + noteLab + "/20.");
console.log("La note à l'examen de mi-session est " + noteMiSession + "/30.");
console.log("La note à l'examen final est " + noteExamenFinal + "/50.");
console.log("La note finale est " + noteFinale + "/100.");

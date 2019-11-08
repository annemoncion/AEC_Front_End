//Exercice 12 : Calculer une note finale basée sur trois examens
var noteSur30;
var noteSur50;
var noteSur20;
var noteFinale;

noteSur30 = Number(prompt("Entrer la note de mi-session (sur 30 points)"));
noteSur50 = Number(prompt("Entrer la note de l'examenr final (sur 50 points"));
noteSur20 = Number(prompt("Entrer la note des laboratoires (sur 20 points)"));

noteFinale = noteSur30 + noteSur50 + noteSur20;

console.log("La note finale de l'élève qui a eu " + noteSur30 + "/30 à la mi-session, " + noteSur50 + "/50 à l'examen final et " + noteSur20 + "/20 en laboratoires, est de " + noteFinale + "%.");
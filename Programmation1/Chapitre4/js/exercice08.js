/* Lire les noms et notes d’examen d’une classe de 5 élèves.
Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne. */

var eleves = [];
var notes = [];

for (var i = 0; i < 5; i++) {
    eleves.push(prompt("Nom de l'élève"));
    notes.push( parseInt(prompt("Note de l'élève"), 10));
}

var totalNotes = 0;
var moyenne;

for (var i = 0; i < notes.length; i++) {
    totalNotes+= notes[i];
}

moyenne = totalNotes / 5;

for (var i = 0; i < eleves.length; i++) {
    if ( notes[i] > moyenne ) {
        document.write(eleves[i] + ', ');
        document.write(notes[i] + '<br>');
    }
}

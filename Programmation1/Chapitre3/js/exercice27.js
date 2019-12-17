// Lire une string, écrire le mot à l'envers. Patate devient etataP
// Indice :  mot[0] donne 'P'
// Indice : mot.length donne 6

var phraseEndroit = prompt("Entrez le mot ou la phrase que vous souhaitez lire à l'envers.");
var longueurPhrase = phraseEndroit.length;
var phraseEnvers = [];

for (var decrementation = longueurPhrase; decrementation >= 0; decrementation--) {
    phraseEnvers.push(phraseEndroit[decrementation]);
}

phraseEnvers = phraseEnvers.join("");

document.write(phraseEnvers);
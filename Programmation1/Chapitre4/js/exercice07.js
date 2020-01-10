/* À l’aide d’une boucle, créez un tableau de 1000 valeurs contenant vrai ou faux
(boolean). Ces valeurs doivent être aléatoires.

Ensuite, à l’aide d’une autre boucle, comptez le nombre de vrai et de faux et
faites-les afficher.

Calculez la plus longue séquence de vrais et de faux consécutifs.
Ex:
Plus longue séquence de vrais consécutifs : 3
		Plus longue séquence de faux consécutifs  : 4

Donnez aussi la position de départ de chacune des séquences :
		Position de départ de la plus longue séquence de vrais consécutifs : 6
		Position de départ de la plus longue séquence de faux consécutifs  : 12 */

var vraiOuFaux = [];

// Faire apparaître le tableau des 1000 valeurs booléennes aléatoires.
for (var i = 0; i < 1000; i++) {
    vraiOuFaux[i] = Math.random() >= 0.5;
    document.write((i+1) + ". ");
    document.write(vraiOuFaux[i] + "<br>");
}

var nombreVrai = 0;
var nombreFaux = 0;
var sequenceVrai = 0;
var sequenceFaux = 0;
var positionSequenceVrai = [];
var positionSequenceFaux = [];
var compteurSequenceVrai = [];
var compteurSequenceFaux = [];

for (var i = 0; i < vraiOuFaux.length; i++) {
    if ( vraiOuFaux[i] === true ) { // Pour les VRAIS
        nombreVrai++; // Compter le nombre de vrais
        sequenceVrai++; // Incrémenter la séquence de vrais
        if (i === 0) { // Si c'est la première fois qu'on passe dans la boucle
            positionSequenceVrai.push(i);
        }
        if ( vraiOuFaux[i-1] === false ) { // Si la séquence précédente a été rompue
            compteurSequenceFaux.push(sequenceFaux); // Ajouter le résultat obtenu au compteur de séquence correspondant
            sequenceFaux = 0; // Remettre la séquence correspondante à zéro.
            positionSequenceVrai.push(i); // Enregistrer la position de la séquence.
        }
        if (i === 49) { // Si c'est la dernière fois qu'on passe dans la boucle
            compteurSequenceVrai.push(sequenceVrai);
        }
    }
    else { // Mêmes étapes répétées pour les FAUX
        nombreFaux++;
        sequenceFaux++;
        if ( vraiOuFaux[i-1] === true ) {
            compteurSequenceVrai.push(sequenceVrai);
            sequenceVrai = 0;
            positionSequenceFaux.push(i);
        }
        if (i === 0) {
            positionSequenceFaux.push(i);
        }
        if (i === 49) {
            compteurSequenceFaux.push(sequenceFaux);
        }
    }
}

// Copier le tableau des séquences Vrai et Faux (avec slice), puis trier les valeurs de la plus petite à la plus grande.
var sortVrai = compteurSequenceVrai.slice();
sortVrai.sort();
var plusLongVrai = sortVrai[sortVrai.length-1];

var sortFaux = compteurSequenceFaux.slice();
sortFaux.sort();
var plusLongFaux = sortFaux[sortFaux.length-1];

document.write("Plus longue séquence de vrais consécutifs: " + plusLongVrai + '<br>');
document.write("Plus longue séquence de faux consécutifs: " + plusLongFaux + '<br>');

document.write("Nombre de 'Vrai' = " + nombreVrai + " et Nombre de 'Faux' = " + nombreFaux + '<br>');

var indicePlusLongVrai = 0;
var indicePlusLongFaux = 0;

for (var i = 0; i < compteurSequenceVrai.length; i ++) {
    if ( compteurSequenceVrai[i] === plusLongVrai) {
        indicePlusLongVrai = i;
        break; //Pour trouver la première position de départ si plusieurs séquences de longueur identique sont présentes.
    }
}

for (var i = 0; i < compteurSequenceFaux.length; i ++) {
    if ( compteurSequenceFaux[i] === plusLongFaux) {
        indicePlusLongFaux = i;
        break;
    }
}

document.write("Position de départ de la plus longue séquence de vrais consécutifs: " + (positionSequenceVrai[indicePlusLongVrai]+1) + '<br>');
document.write("Position de départ de la plus longue séquence de faux consécutifs: " + (positionSequenceFaux[indicePlusLongFaux]+1) + '<br>');


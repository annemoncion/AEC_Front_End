/* Le collège offre 6 options aux étudiants. Ces options sont :
INFORMATIQUE
ADMINISTRATION
HISTOIRE
GÉNIE
GEOGRAPHIE
BUREAUTIQUE

Mettre ces options dans un tableau, puis demander à un étudiant d’entrer un nom d’option.
Vous lui répondez si OUI ou NON le collège offre cette option. */

var options = ['informatique', 'administration', 'histoire', 'génie', 'géographie', 'bureautique'];
var choix = prompt("Entrer un nom d'option.");
var choixTrouver = false;

for (var i = 0; i < options.length; i++) {
    if ( choix.toLowerCase() === options[i] ) {
        document.write("Oui, le collège offre cette option.");
        choixTrouver = true;
    }
}

if ( !choixTrouver ) {
    document.write("Non, le collège n'offre pas cette option.");
}

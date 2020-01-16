/* La Martingale
http://fr.wikipedia.org/wiki/Martingale
Vous vous souvenez sûrement de la technique de la Martingale dont je vous avais parlé au premier cours. (Shany)

Il s’agit de jouer à un jeu qui a 50 % des chances de gagner. Par exemple, la roulette ou le blackjack.

On mise 1$. Si on gagne, on obtient 1$ de profit.
Si on perd, on mise le double 2$. Si on gagne, on a encore 1$ de profit.
Si on perd, on mise le double...

Je veux que vous testiez la technique de la Martingale en jouant jusqu’à ce que vous ayez empoché 1000 $.
Je veux savoir le montant maximal que vous avez dû mettre sur la table (le nombre de défaites consécutives).
Suite à ces résultats, est-ce que vous investissez votre argent sur la Martingale?

Essayez d’ajouter une boucle qui teste la Martingale 1000 fois et
affichez un tableau de statistiques quant au montant maximal sur la table…
Pour tester la Martingale en action gratuitement avec des BitCoins 999dice.com */

var compteParis = 0;
var gain = 0;
var defaites = [];

// Tant que le joueur n'a pas remporté 1000$
while ( gain < 1000 ) {
    // Remise à zéro des variables
    var victoire = false;
    var mise = 1;
    var compteMise = 0;
    // Tant que la partie est perdue
    while ( !victoire ) {
        // Générer un booléen aléatoire
        var booleenAleatoire = Math.random() >= 0.5;
        // Ajouter la mise au montant total misé pour la partie
        compteMise += mise;
        // Compter le nombre de paris nécessaires avant de gagner la partie
        compteParis++;
        // Encaisser 1$ si le joueur gagne
        if ( booleenAleatoire ) {
            victoire = true;
            gain++;
            // Enregistrer le montant maximal qui a été joué pour gagner la partie
            defaites.push(compteMise);
        }
        // Sinon, doubler la mise
        else {
            mise *= 2 ;
        }
    }
}

// Afficher toutes les 1000 parties en ordre chronologique
/* document.write("Montant maximal misé à chaque partie jusqu'à remporter une victoire (1$):<br>");
for (var i = 0; i < defaites.length; i++) {
    document.write("Partie " + (i+1) + " : " + defaites[i] + "$ misé<br>");
} */

//Trier les montants maximum perdus en ordre croissant
function compareNumbers(a,b) {
    return a - b;
}
defaites.sort(compareNumbers);

// Afficher un tableau des statistiques du nombre de fois par montant maximum joué pour gagner une partie
for ( var possibleMise = 1; possibleMise <= defaites[defaites.length-1]; possibleMise = possibleMise*2+1 ) {
    var nbMises = 0;
    document.write("Mise: " + possibleMise + "$ ---- ");
    for ( var i = 0; i < defaites.length; i++) {
        if ( defaites[i] === possibleMise ) {
            nbMises++;
        }
    }
    document.write(nbMises + " fois<br>");
}

// Afficher les résultats
document.write("<br>Nombre total de paris: " + compteParis + "<br>");
document.write("Montant maximal misé pour une partie: " + defaites[defaites.length-1] + "$.");



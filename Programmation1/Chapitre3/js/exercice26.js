// Le jeu de carte Yablon révisé.
// Dans ce jeu, le croupier retourne d’abord deux cartes sur la table.
// Le joueur doit ensuite parier si la valeur de la prochaine carte (la troisième) sera ou non classée
// entre les deux premières cartes. S’il remporte son pari, il gagne la partie, sinon il perd.
// Nous proposerons ici une version quelque peu modifiée du jeu.
// Pour rendre les paris plus intéressants, le joueur devra parier tant qu’il gagne
// (tant que ses prédictions sont correctes).
// Votre algorithme doit donc générer et afficher deux nombres aléatoires de 1 à 13.
// Il doit ensuite demander à l’utilisateur de faire ses paris. Lorsque l’utilisateur perd,
// le nombre de prédictions remportées est affiché.
var victoire = true;
var comptage = 0;

while ( victoire ) {
    var premiereCarte = Math.floor(Math.random() * (13 - 1 + 1)) + 1;
    var deuxiemeCarte = Math.floor(Math.random() * (13 - 1 + 1)) + 1;
    var troisiemeCarte = Math.floor(Math.random() * (13 - 1 + 1)) + 1;
    var plusPetiteCarte;
    var plusGrandeCarte;
    var bonneReponse;

    console.log("Première carte tirée: " + premiereCarte + " Deuxième carte tirée: " + deuxiemeCarte);

    // Afficher les deux premières cartes tirées et demander la prédiction
    prediction = prompt("Premiere carte tirée: " + premiereCarte + " Deuxième carte tirée: " + deuxiemeCarte + " La valeur de la troisième carte tirée sera-t-elle classée entre celles des deux premières (inclusivement) ? Entrez 'oui' ou 'non'.");

    console.log("Votre prédiction: " + prediction);
    console.log("Troisième carte tirée: " + troisiemeCarte);

    // Identifier la plus petite et la plus grande carte parmi les deux premières cartes tirées.
    if (premiereCarte > deuxiemeCarte) {
        plusPetiteCarte = deuxiemeCarte;
        plusGrandeCarte = premiereCarte;
    } else {
        plusPetiteCarte = premiereCarte;
        plusGrandeCarte = deuxiemeCarte;
    }

    // Associer la bonne réponse au résultat de la troisième carte tirée.
    if ( troisiemeCarte >= plusPetiteCarte && troisiemeCarte <= plusGrandeCarte ) {
        bonneReponse = "oui";
    } else {
        bonneReponse = "non";
    }

    // Vérifier si la prédiction est exacte ou non. Ajouter un point au compteur si la prédiction est vraie.
    if ( prediction !== bonneReponse ) {
        victoire = false;
    } else {
        comptage++;
    }
}

document.write("Vous avez gagné " + comptage + " fois!");

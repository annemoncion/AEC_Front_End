// Lire le montant de vente et afficher le montant d’escompte correspondant
// sachant que le taux d’escompte est de 12%
// et n’est calculé que sur les montants supérieurs ou égaux à $500.00.

var montant = Number (prompt("Entrer le montant total des achats"));
var escompte;

if ( montant >= 500 ) {
    escompte = Math.round((montant * 12 / 100)*100)/100;
} else {
    escompte = 0;
}

document.write("Pour un achat de " + montant + "$, l'escompte est de " + escompte + "$.");
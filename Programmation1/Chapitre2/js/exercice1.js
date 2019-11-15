//Exercice 1 : Lire deux nombres et afficher le plus grand des deux

var nombre1;
var nombre2;
var plusGrandNb;

nombre1 = Number (prompt("Nombre 1"));
nombre2 = Number (prompt("Nombre 2"));

if (nombre1 > nombre2) {
    plusGrandNb = nombre1;
} else {
    plusGrandNb = nombre2;
}

console.log(plusGrandNb);
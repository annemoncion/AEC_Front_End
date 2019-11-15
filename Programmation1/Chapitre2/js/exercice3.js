//Exercice 3: Lire deux nombres, si les deux nombres sont plus grands que 9, écrire Bonjour, sinon Bonsoir
var nombre1;
var nombre2;
var message;

nombre1 = prompt("Nombre 1");
nombre2 = prompt("Nombre 2");

if (nombre1 > 9 && nombre2 > 9) {
    message = "Bonjour!";
} else {
    message = "Bonsoir!";
}

console.log(message);

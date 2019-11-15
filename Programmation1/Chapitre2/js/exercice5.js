//Exercice 5: Lire un degré de température. Si température entre -40 et -10 écrire HAAA il fait froid
// Sinon écrire Enfin une belle journée

var temperature;
var message;

temperature = Number (prompt("Entrer un degré de température."));

if (-40 <= temperature <= -10) { // avec &&, ça marche... ?
    message = "HAAAAAA! Il fait froid.";
} else {
    message = "Enfin une belle journée!";
}

console.log(message);
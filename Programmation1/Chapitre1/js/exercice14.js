//Exercice 14 : Fonction quadratique  y = ac2 + bx + c

var a= Number(prompt ("A"));
var b = Number(prompt ("B"));
var c = Number(prompt ("C"));
var x = Number(prompt ("X"));
var y;

y = a * Math.pow(x,2) + b * x + c;

console.log(y);
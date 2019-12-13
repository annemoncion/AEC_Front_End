// Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et compter le nombre de 0 et 1.
var nb;
var compteurZero = 0;
var compteurUn = 0;

for (incrementation = 0; incrementation < 100; incrementation++) {
    nb = Math.round(Math.random());
    if (nb === 0) {
        compteurZero = compteurZero + 1;
    } else if (nb === 1) {
        compteurUn++;
    }
    document.write(nb + "<br>");
}

document.write("Nombre de zéros: " + compteurZero + "<br>Nombre de un: " + compteurUn);


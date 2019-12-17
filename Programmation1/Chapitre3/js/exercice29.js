// Ecrire un programme qui demande à l'utilisateur de saisir un entier N et qui affiche la figure suivante.
//         N=1
//         *
//         N=2
//         **
//         N=3
//         ***

var n = Number(prompt("Entrer un nombre entier pour faire apparaître le nombre d'étoiles correspondant."));

document.write("N=" + n + "<br><br>")
for (var i = 0; i < n; i++) {
    document.write('*')
}
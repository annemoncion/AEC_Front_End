/* Mettre dans un tableau les 10 bonnes réponses à un test objectif (vrai ou faux).
Par la suite, faire la correction du test d’un étudiant en lisant ses 10 réponses
et afficher sa note sur 10. */

var bonnesReponses = [true, true, false, true, false, false, false, true, true, false];
var reponsesEleve = [];
var compteur = 0;

for (var i = 0; i < bonnesReponses.length; i++) {
    var reponseEleve;
    reponseEleve = prompt("Quelle est la réponse? (Vrai ou Faux?)");
    if ( reponseEleve.toLowerCase() === 'vrai' ) {
        reponsesEleve.push(true);
    }
    else if ( reponseEleve.toLowerCase() === 'faux' ) {
        reponsesEleve.push(false);
    }
    else {
        document.write("Veuillez écrire 'Vrai' ou 'Faux' à chaque question.");
        reponsesEleve = [];
        break;
    }
}

for (var i = 0; i < bonnesReponses.length; i++) {
    if ( reponsesEleve[i] === bonnesReponses[i] ) {
        compteur++;
    }
    document.write("Rep. élève:" + reponsesEleve[i] + " Corrigé:" + bonnesReponses[i] + "<br>");
}

document.write("Note: " + compteur + "/10");

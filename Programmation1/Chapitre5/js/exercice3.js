/* Créez une classe Examen qui contient 5 questions. Chaque question vaut de zéro à 20 points.
Examen possède la fonction GetNote() qui retourne son score sur 100
Créez une classe Etudiant qui contient les propriétés : nom, prénom et un Examen.

Instanciez 10 étudiants avec chacun un examen dont chaque résultat de chaque question est choisi aléatoirement.

Affichez les élèves qui réussissent l’examen et ceux qui échouent.  */

class Examen {
    constructor() {
        this.question1 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
        this.question2 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
        this.question3 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
        this.question4 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
        this.question5 = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    }

    GetNote() {
        return(this.question1 + this.question2 + this.question3 + this.question4 + this.question5);
    }
}

class Etudiant {
    constructor(prenom, nom, examen) {
        this.prenom = prenom;
        this.nom = nom;
        this.examen = examen;
    }
}

class Etudiants {
    constructor(etudiants) {
        this.etudiants = etudiants;
    }
}

let etudiant1 = new Etudiant("Anne", "Moncion", new Examen());
let etudiant2 = new Etudiant("Julie", "D.", new Examen());
let etudiant3 = new Etudiant("Mag", "Z.", new Examen());
let etudiant4 = new Etudiant("Fana", "Tique", new Examen());
let etudiant5 = new Etudiant("Dist", "Ance", new Examen());
let etudiant6 = new Etudiant("Oliver", "Twist", new Examen());
let etudiant7 = new Etudiant("Minuit", "Chrétien", new Examen());
let etudiant8 = new Etudiant("Salvador", "Dali", new Examen());
let etudiant9 = new Etudiant("Powpow", "Tesmort", new Examen());
let etudiant10 = new Etudiant("Allé", "Luia", new Examen());

let mesEtudiants = new Etudiants([etudiant1, etudiant2, etudiant3, etudiant4, etudiant5, etudiant6, etudiant7, etudiant8, etudiant9, etudiant10]);

document.write("Élèves qui ont passé l'examen: <br>");
for (i = 0; i < mesEtudiants.etudiants.length; i++) {
    console.log(mesEtudiants.etudiants[i].nom);
    if (mesEtudiants.etudiants[i].examen.GetNote() >= 60) {
        document.write(mesEtudiants.etudiants[i].prenom + " " + mesEtudiants.etudiants[i].nom + "<br>")
    }
}


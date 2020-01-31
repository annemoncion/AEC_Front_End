/* Créez une classe JoueurHockey.
nom
nbButs
nbPasses

Instanciez :
Sydney Crosy 454 buts 787 passes
Mario Lemieux 690 buts 1033 passes
Jaromir Jagr 766 buts 1155 passes

Créez une méthode nommée Total qui retourne le nombre de points (buts + passes)

Créez une classe Equipe qui contient 3 joueurs

Instanciez votre équipe avec vos 3 joueurs

Créez une méthode qui s’appelle AfficherAlignement() qui affiche tous les joueurs d’une équipe.

Créez une méthode qui s’appelle AfficherPointsTotaux() qui affiche le total de points de 3 joueurs de l’équipe. */

class JoueurHockey {
    constructor(nom,nbButs,nbPasses) {
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }

    Total() {
        return(this.nbButs + this.nbPasses);
    }
}

let sydney = new JoueurHockey("Sydney Crosby", 454, 787);
let mario = new JoueurHockey("Mario Lemieux", 690, 1033);
let jaromir = new JoueurHockey("Jaromir Jagr", 766, 1155);

class Equipe {
    constructor(joueurs) {
        this.joueurs = joueurs;
    }

    AfficherAlignement() {
        let alignement = "Alignement: <br>";
        for (let i = 0; i < this.joueurs.length; i++) {
            alignement += this.joueurs[i].nom + "<br>";
        }
        return alignement;
    }

    AfficherPointsTotaux() {
        let points = 0;
        for (let i = 0; i < this.joueurs.length; i++) {
            points += this.joueurs[i].Total();
        }
        return points;
    }
}

let equipe1 = new Equipe([sydney, mario, jaromir]);

let alignementEquipe1 = equipe1.AfficherAlignement();
document.write(alignementEquipe1);


let pointsTotauxEquipe1 = equipe1.AfficherPointsTotaux();
document.write("Points totaux: " + pointsTotauxEquipe1);

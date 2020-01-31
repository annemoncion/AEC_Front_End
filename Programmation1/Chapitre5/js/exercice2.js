/* Créez une classe Cylindre qui contient deux propriétés :
une hauteur et un rayon.

La classe Cylindre doit contenir une méthode GetVolume() qui retourne son volume.

Créez 2 cylindres avec les valeurs de votre choix et testez votre méthode GetVolume().

Créez une classe Boite qui contient un tableau de Cylindres.

Remplissez la boîte de 5 cylindres de votre choix.

Créez une méthode GetVolumeBoite() qui permet d’afficher le volume total des 5 cylindres.  */

class Cylindre {
    constructor(hauteur, rayon) {
        this.hauteur = hauteur;
        this.rayon = rayon;
    }

    GetVolume() {
        return(Math.PI * Math.pow(this.rayon, 2) * this.hauteur);
    }
}

class Boite {
    constructor(cylindres) {
        this.cylindres = cylindres;
    }

    GetVolumeBoite() {
        let volumeTotal = 0;
        for (let i = 0; i < this.cylindres.length; i++) {
            volumeTotal += this.cylindres[i].GetVolume();
        }
        return volumeTotal;
    }
}

let cylindre1 = new Cylindre(80, 2);
let cylindre2 = new Cylindre(10, 5);
let cylindre3 = new Cylindre(30, 10);
let cylindre4 = new Cylindre(100, 40);
let cylindre5 = new Cylindre(28, 34);

let boite1 = new Boite([cylindre1, cylindre2, cylindre3, cylindre4, cylindre5]);

let volume1 = cylindre1.GetVolume();
document.write("Le volume du cylindre 1 est " + volume1 + "<br>");

let volumeTotal = boite1.GetVolumeBoite();
document.write("Le volume de tous les cylindres dans la boite 1 est " + volumeTotal);

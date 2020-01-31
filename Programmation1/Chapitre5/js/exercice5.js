/* Créez une classe très grosse poupée russe qui contient une grosse poupée russe qui contient une poupé russe
 qui contient une petite poupée russe qui contient une très petite poupée russe.
Chacune de ces poupées possède la fonction GetParents() qui retourne dans combien de poupées russes
elle se situe et GetEnfants() qui retourne combien de poupées russes sont à l’intérieur d’elle. */

class TresGrossePoupee {
    constructor(grossePoupee) {
        this.grossePoupee = grossePoupee;
        this.couleur = "rouge";
    }

    GetParents() {
        let compteur = 0;

    }

    GetEnfants() {
        let compteur = 0;
        for (let key in TresGrossePoupee) {
            if (typeof(TresGrossePoupee[key]) === 'object' && TresGrossePoupee[key] !== null) {
                compteur++;
                console.log("iteration");
            }
        }
        return compteur;
    }
}

class GrossePoupee {
    constructor(poupee) {
        this.poupee = poupee;
        this.couleur = "bleue";
    }
}

class Poupee {
    constructor(petitePoupee) {
        this.petitePoupee = petitePoupee;
        this.couleur = "verte";
    }
}

class PetitePoupee {
    constructor(tresPetitePoupee) {
        this.tresPetitePoupee = tresPetitePoupee;
        this.couleur = "jaune";
    }
}

class TresPetitePoupee {
    constructor() {
        this.couleur = "mauve";
    }
}

let ann = new TresPetitePoupee;
let anna = new PetitePoupee(ann);
let annab = new Poupee(anna);
let annabel = new GrossePoupee(annab);
let annabelle = new TresGrossePoupee(annabel);
let compteurAnnabelle = annabelle.GetEnfants();

document.write(compteurAnnabelle);
console.log(typeof(annabelle.grossePoupee));




/* Créez une classe très grosse poupée russe qui contient une grosse poupée russe qui contient une poupé russe
 qui contient une petite poupée russe qui contient une très petite poupée russe.
Chacune de ces poupées possède la fonction GetParents() qui retourne dans combien de poupées russes
elle se situe et GetEnfants() qui retourne combien de poupées russes sont à l’intérieur d’elle. */
let compteur = 0;


class TresGrossePoupee {
    constructor(grossePoupee) {
        this.grossePoupee = grossePoupee;
    }

    GetParents() {
        return compteur;
    }

    GetEnfants() {
        this.grossePoupee.GetEnfants();
        compteur++;
        return compteur;
    }
}

class GrossePoupee {
    constructor(poupee) {
        this.poupee = poupee;
    }

    GetParents() {
        TresGrossePoupee.prototype.GetParents();
        compteur++;
        return compteur;
    }

    GetEnfants() {
        this.poupee.GetEnfants();
        compteur++;
        return compteur;
    }
}

class Poupee {
    constructor(petitePoupee) {
        this.petitePoupee = petitePoupee;
    }

    GetParents() {
        GrossePoupee.prototype.GetParents();
        compteur++;
        return compteur;
    }

    GetEnfants() {
        this.petitePoupee.GetEnfants();
        compteur++;
        return compteur;
    }
}

class PetitePoupee {
    constructor(tresPetitePoupee) {
        this.tresPetitePoupee = tresPetitePoupee;
    }

    GetParents() {
        Poupee.prototype.GetParents();
        compteur++;
        return compteur;
    }

    GetEnfants() {
        this.tresPetitePoupee.GetEnfants();
        compteur++;
        return compteur;
    }
}

class TresPetitePoupee {
    constructor() {
    }

    GetParents() {
        PetitePoupee.prototype.GetParents();
        compteur++;
        return compteur;
    }

    GetEnfants() {
        return compteur;
    }
}

let ann = new TresPetitePoupee;
let anna = new PetitePoupee(ann);
let annab = new Poupee(anna);
let annabel = new GrossePoupee(annab);
let annabelle = new TresGrossePoupee(annabel);

document.write(annab.GetEnfants());



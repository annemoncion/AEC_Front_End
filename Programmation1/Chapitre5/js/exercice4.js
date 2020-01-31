/* Créez un objet Guerrier qui possède 5 propriétés.
Les points de vie, la force, l’agilité, la chance et la précision.
La chance du guerrier est un nombre aléatoire de 0 à 1 qui doit être recalculée après chaque attaque.
Le guerrier possède la fonction Attaquer() qui retourne un nombre de points de dégâts = (force*précision+agilité)*chance
 */

class Guerrier {
    constructor(hp) {
        this.hp = hp;
        this.force = (Math.ceil(Math.random() * 10));
        this.agilite = (Math.ceil(Math.random() * 10));
        this.chance = Math.random();
        this.precision = (Math.ceil(Math.random() * 10));
    }

    Attaquer() {
        return(Math.round((this.force * this.precision + this.agilite)*this.chance));
    }

    ResetChance() {
        let nouvelleChance = Math.random();
        return(nouvelleChance);
    }
}

let elfe = new Guerrier(100 );
let orc = new Guerrier(100);

while (elfe.hp > 0 && orc.hp > 0) {
    let attaqueElfe = elfe.Attaquer();
    let attaqueOrc = orc.Attaquer();
    let chanceElfe = elfe.ResetChance();
    let chanceOrc = orc.ResetChance();

    // L'elfe attaque en premier
    document.write("L'elfe attaque et fait " + attaqueElfe + " de dommages à l'orc.<br>");
    orc.hp -= attaqueElfe;
    elfe.chance = chanceElfe;

    // L'orc attaque s'il est encore vivant
    if (orc.hp > 0) {
        document.write("L'orc attaque et fait " + attaqueOrc + " de dommages à l'elfe.<br>");
        elfe.hp -= attaqueOrc;
        orc.chance = chanceOrc;
    }

    // Afficher le nombre de points de vie restant à chaque guerrier
    document.write("L'elfe a maintenant ");
    if (elfe.hp > 0) {
        document.write(elfe.hp + " points de vie et l'orc a ");
    }
    else {
        document.write(" 0 point de vie et l'orc a ");
    }
    if (orc.hp > 0) {
        document.write(orc.hp + " points de vie.<br>");
    }
    else {
        document.write(" 0 pt de vie.<br>");
    }
}

// Afficher les résultats finaux du combat
if (elfe.hp > 0 && orc.hp <= 0) {
    document.write("L'elfe est vainqueur!");
}
else if (elfe.hp <= 0 && orc.hp > 0) {
    document.write("L'orc a gagné...Bouh.");
}


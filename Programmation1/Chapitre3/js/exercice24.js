// Trouvez tous les nombres de Armstrong de moins de 1000.
// Nombre de Armstrong: nombre naturel égal à la somme des cubes des chiffres qui le composent.

var nombre = 1;
var nombreArmstrong = "";

while(nombre < 1000) {
    var nombreEnMorceaux = nombre.toString().split("");
    var positionDansArray = 0;
    var somme = 0;

    // Pour chaque nombre séparé en tous les chiffres qui le composent
    while(nombreEnMorceaux[positionDansArray]) {
        // Trouver le cube de chaque chiffre le composant
        var nombreAuCube = Math.pow((nombreEnMorceaux[positionDansArray]), 3);
        // Ajouter la valeur du cube à la somme des chiffres du nombre
        somme += nombreAuCube;
        // Ajouter le nombre à la liste des nombres de Armstrong seulement si la somme est égale au nombre
        if (somme === nombre) {
            nombreArmstrong += somme + "<br>";
        }
        positionDansArray++;
    }
    // document.write(nombre + "<br>");
    nombre++;
}

document.write(nombreArmstrong);
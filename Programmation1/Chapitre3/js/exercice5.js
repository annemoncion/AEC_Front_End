// Afficher le texte "C'est long" 100 000 fois! Combien de temps est nécessaire à l'exécution (comptez dans votre tête)? (même pas 2s)
var incrementation = 1;
var texte = "C'est long";

while(incrementation <= 100000) {
    document.write(texte + " ");
    incrementation ++;
}
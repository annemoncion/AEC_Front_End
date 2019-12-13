// Faites afficher
// [0,0] [0,1] [0,2] [0,3] [0,4] [0,5]
// [1,0] [1,1] [1,2] [1,3] [1,4] [1,5]
// [2,0] [2,1] [2,2] [2,3] [2,4] [2,5]
// [3,0] [3,1] [3,2] [3,3] [3,4] [3,5]

var premiereValeur = 0;
var deuxiemeValeur = 0;
var array = [];

for (ligne = 1; ligne <= 4; ligne++) {
    for (incrementation = 0; incrementation < 6; incrementation++) {
        array = [premiereValeur, deuxiemeValeur];
        document.write("[" + array + "] ");
        deuxiemeValeur++;
    }
    deuxiemeValeur = 0;
    premiereValeur++;
    document.write("<br>");
}

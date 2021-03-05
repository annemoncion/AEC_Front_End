import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './Forfait';

@Pipe({
  name: 'forfaitsAccueil'
})
export class ForfaitsAccueilPipe implements PipeTransform {

  forfaits: Forfait[];

  transform(forfaits: Forfait[], recherche): Forfait[] {
    if (!forfaits) return [];

    let filteredForfaits = forfaits;
    let todayDate = new Date();

    if (recherche.nbJours.length > 0) {
      let arrayDuree = [];
      let selectionForfaits = [];

      // Créer un tableau contenant les durées de chaque forfait
      for (let i = 0; i < forfaits.length; i++) {
        const dateDepart = new Date(forfaits[i].dateDepart);
        const dateRetour = new Date(forfaits[i].dateRetour);
        let duree = 0;
        duree = (dateRetour.valueOf() - dateDepart.valueOf()) / (1000 * 3600 * 24) + 1;
        arrayDuree.push(duree);
      }

      // Comparer les durées sélectionnées dans le formulaire de recherche et garder les forfaits dont l'index correspond.
      for (let j = 0; j < recherche.nbJours.length; j++) {
        for (let k = 0; k < arrayDuree.length; k++) {
          if (arrayDuree[k] === recherche.nbJours[j]) {
            selectionForfaits.push(forfaits[k]);
          }
        }
      }

      filteredForfaits = selectionForfaits;

    }

    if (recherche.nbEtoiles > 1) {
      filteredForfaits = filteredForfaits.filter(forfait => forfait.hotel.nombreEtoiles === recherche.nbEtoiles );
    }

    if (recherche.dateDepart.setHours(0,0,0,0) !== todayDate.setHours(0,0,0,0)) {

      const dateOb = recherche.dateDepart;
  
      // ajouter le zéro pour les dates à un chiffre
      const date = ('0' + dateOb.getDate()).slice(-2);
  
      // associer le mois au raccourci français
      const monthNumeric = dateOb.getMonth() + 1;
      let month = '';
  
      switch(monthNumeric) {
        case 1:
          month = '01'
          break;
        case 2:
          month = '02'
          break;
        case 3:
          month = '03'
          break;
        case 4:
          month = '04'
          break;
        case 5:
          month = '05'
          break;
        case 6:
          month = '06'
          break;
        case 7:
          month = '07'
          break;
        case 8:
          month = '08'
          break;
        case 9:
          month = '09'
          break;
        case 10:
          month = '10'
          break;
        case 11:
          month = '11'
          break;
        case 12:
          month = '12'
          break;
      }
  
      // année
      const year = dateOb.getFullYear();
  
      // retourner la date dans le format AAAA-MM-DD
      const dateFormatted = year + '-' + month + '-' + date;

      filteredForfaits = filteredForfaits.filter(forfait => forfait.dateDepart === dateFormatted );
    }

    return filteredForfaits;
  }

}

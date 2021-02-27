import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.sass'],
})
export class ForfaitComponent implements OnInit {
  @Input () forfait: Forfait;

  /*get dateDepart() {
    const dateOb = this.forfait.dateDepart;

    // ajouter le zéro pour les dates à un chiffre
    const date = ('0' + dateOb.getDate()).slice(-2);

    // associer le mois au raccourci français
    const monthNumeric = dateOb.getMonth() + 1;
    let month = '';

    switch(monthNumeric) {
      case 1:
        month = 'janv.'
        break;
      case 2:
        month = 'fév.'
        break;
      case 3:
        month = 'mars'
        break;
      case 4:
        month = 'avr.'
        break;
      case 5:
        month = 'mai'
        break;
      case 6:
        month = 'juin'
        break;
      case 7:
        month = 'juil.'
        break;
      case 8:
        month = 'août'
        break;
      case 9:
        month = 'sept.'
        break;
      case 10:
        month = 'oct.'
        break;
      case 11:
        month = 'nov.'
        break;
      case 12:
        month = 'déc.'
        break;
    }

    // année
    const year = dateOb.getFullYear();

    // retourner la date dans le format DD MM AAAA
    return date + ' ' + month + ' ' + year;
  }

  get dateRetour() {
    const dateOb = this.forfait.dateRetour;

    // ajouter le zéro pour les dates à un chiffre
    const date = ('0' + dateOb.getDate()).slice(-2);

    // associer le mois au raccourci français
    const monthNumeric = dateOb.getMonth() + 1;
    let month = '';

    switch(monthNumeric) {
      case 1:
        month = 'janv.'
        break;
      case 2:
        month = 'fév.'
        break;
      case 3:
        month = 'mars'
        break;
      case 4:
        month = 'avr.'
        break;
      case 5:
        month = 'mai'
        break;
      case 6:
        month = 'juin'
        break;
      case 7:
        month = 'juil.'
        break;
      case 8:
        month = 'août'
        break;
      case 9:
        month = 'sept.'
        break;
      case 10:
        month = 'oct.'
        break;
      case 11:
        month = 'nov.'
        break;
      case 12:
        month = 'déc.'
        break;
    }

    // année
    const year = dateOb.getFullYear();

    // retourner la date dans le format DD MM AAAA
    return date + ' ' + month + ' ' + year;
  }

  get duree() {
    const dateDepart = this.forfait.dateDepart;
    const dateRetour = this.forfait.dateRetour;
    return -((dateDepart.valueOf() - dateRetour.valueOf()) / (1000 * 3600 * 24)) + 1;
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}

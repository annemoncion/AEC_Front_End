import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DUREE } from '../mock-duree';
import { CARACTERISTIQUES } from '../mock-caracteristiques';
import { Recherche } from '../recherche';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.sass'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class FormulaireRechercheComponent implements OnInit {
  constructor() { }

  duree: number[] = DUREE;

  caracteristiques: string[] = CARACTERISTIQUES;

  // Datepicker takes `Moment` objects instead of `Date` objects.
  date = new FormControl(moment([2020, 0, 1]));

  nbJours = new FormControl();

  labelEtoiles(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  // Surveiller mise à jour des champs associés à l'interface Formulaire pour filtrer la recherche
  @Input() recherche: Recherche;
  @Output() rechercheChange = new EventEmitter();

  // Champs date de départ
  changeDateDepart(nouvelleValeur) {
    // Conversion de l'objet moment utilisé par Angular Material vers un objet Date régulier
    let date: Date = moment(nouvelleValeur).toDate();

    let nouvelleRecherche: Recherche = {
      dateDepart: date,
      nbJours: this.recherche.nbJours,
      nbEtoiles: this.recherche.nbEtoiles
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }

  // Champs durée
  changeNbJours(nouvelleValeur) {
    let nouvelleRecherche: Recherche = {
      dateDepart: this.recherche.dateDepart,
      nbJours: nouvelleValeur,
      nbEtoiles: this.recherche.nbEtoiles
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }

  // Champs nombre d'étoiles
  changeNbEtoiles(nouvelleValeur) {
    let nouvelleRecherche: Recherche = {
      dateDepart: this.recherche.dateDepart,
      nbJours: this.recherche.nbJours,
      nbEtoiles: nouvelleValeur
    };
    this.recherche = nouvelleRecherche;
    this.rechercheChange.emit(nouvelleRecherche);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { CARACTERISTIQUES } from '../mock-caracteristiques';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.sass'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class FormulaireForfaitComponent implements OnInit {
  nomHotel = '';
  coordonnees = '';
  nbChambres = '';
  ctrlNbChambres = new FormControl('', [
    Validators.required,
    Validators.min(1),
  ]);
  villeDepart = '';

  controlDestination = new FormControl();
  optionsDestination: string[] = ['Mexique', 'Californie', 'Cuba'];
  filteredOptionsDestination: Observable<string[]>;

  controlDepart = new FormControl();
  optionsDepart: string[] = ['Montréal', 'Québec', 'Toronto'];
  filteredOptionsDepart: Observable<string[]>;

  // Datepicker takes `Moment` objects instead of `Date` objects.
  date = new FormControl(moment([2020, 0, 1]));

  labelEtoiles(value: number) {

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  caracteristiques: string[] = CARACTERISTIQUES;

  ngOnInit(){
    this.filteredOptionsDestination = this.controlDestination.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterDestination(value))
      );
    this.filteredOptionsDepart = this.controlDepart.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterDepart(value))
      );
  }

  private _filterDestination(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsDestination.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterDepart(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionsDepart.filter(option => option.toLowerCase().includes(filterValue));
  }
}

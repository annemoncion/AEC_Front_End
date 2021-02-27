import { Component, OnInit } from '@angular/core';
import { Recherche } from '../recherche';
import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-forfaits-cuba',
  templateUrl: './forfaits-cuba.component.html',
  styleUrls: ['./forfaits-cuba.component.sass']
})
export class ForfaitsCubaComponent implements OnInit {

  forfaits: Forfait[] = FORFAITS;
  
  recherche: Recherche = {
    dateDepart: new Date,
    nbJours: 0,
    nbEtoiles: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}

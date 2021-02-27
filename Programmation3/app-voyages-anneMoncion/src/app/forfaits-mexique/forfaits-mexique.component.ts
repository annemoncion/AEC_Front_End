import { Component, OnInit } from '@angular/core';
import { Recherche } from '../recherche';
import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-forfaits-mexique',
  templateUrl: './forfaits-mexique.component.html',
  styleUrls: ['./forfaits-mexique.component.sass']
})
export class ForfaitsMexiqueComponent implements OnInit {

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

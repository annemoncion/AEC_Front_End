import { Component, OnInit } from '@angular/core';
import { Recherche } from '../recherche';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.sass']
})
export class AccueilComponent implements OnInit {

  forfaits: Forfait[];

  showFiller = false;
  
  recherche: Recherche = {
    dateDepart: new Date,
    nbJours: 0,
    nbEtoiles: 0
  };

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
  }

}

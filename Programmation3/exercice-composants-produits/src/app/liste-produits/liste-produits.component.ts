import { Component, OnInit } from '@angular/core';
import { Produit } from '../Produit';
import { PRODUITS } from '../mock-produits';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.sass']
})
export class ListeProduitsComponent implements OnInit {
  produits : Produit[] = PRODUITS;
  constructor() { }

  ngOnInit(): void {
  }

}

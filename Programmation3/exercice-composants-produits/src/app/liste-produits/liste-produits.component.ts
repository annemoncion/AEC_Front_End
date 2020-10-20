import { Component, OnInit } from '@angular/core';
import { Produit } from '../Produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.sass']
})
export class ListeProduitsComponent implements OnInit {
  tablette: Produit = { id: '1', nom: 'Tablette graphique', description: 'Pour illustration à la vitesse de l\'éclair', prix: 525};
  appareilPhoto: Produit = { id: '2', nom: 'Appareil photo', description: 'Pour photographier les plus beaux sujets', prix: 315};

  constructor() { }

  ngOnInit(): void {
  }

}

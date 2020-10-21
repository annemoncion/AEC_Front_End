import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../Produit';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.sass']
})
export class FicheProduitComponent implements OnInit {
  @Input () produit: Produit;
  @Input () nom: string;
  @Input () description: string;
  @Input () prix: number;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.sass']
})
export class FicheProduitComponent implements OnInit {
  @Input () produit: object;
  constructor() { }

  ngOnInit(): void {
  }

}

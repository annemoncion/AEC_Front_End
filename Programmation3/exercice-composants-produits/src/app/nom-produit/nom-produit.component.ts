import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nom-produit',
  templateUrl: './nom-produit.component.html',
  styleUrls: ['./nom-produit.component.sass']
})
export class NomProduitComponent implements OnInit {
  @Input () nom: string;
  constructor() { }

  ngOnInit(): void {
  }

}

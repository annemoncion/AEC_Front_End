import { Component, OnInit, Input } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';
import { Recherche } from '../recherche';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.sass']
})
export class ListeForfaitsComponent implements OnInit {
  @Input() recherche: Recherche;

  forfaits: Forfait[] = FORFAITS;

  constructor() { }

  ngOnInit(): void {
  }

}

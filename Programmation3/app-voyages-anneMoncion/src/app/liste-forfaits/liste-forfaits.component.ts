import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.sass']
})
export class ListeForfaitsComponent implements OnInit {
  forfaits: Forfait[] = FORFAITS;

  constructor() { }

  ngOnInit(): void {
  }

}

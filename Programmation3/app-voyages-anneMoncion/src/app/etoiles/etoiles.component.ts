import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.sass']
})
export class EtoilesComponent implements OnInit {
  @Input () nbEtoiles: number;

  constructor() { }

  ngOnInit(): void {
  }

}

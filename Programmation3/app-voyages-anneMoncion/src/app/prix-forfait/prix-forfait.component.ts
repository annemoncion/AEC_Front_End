import { Component, OnInit, Input } from '@angular/core';
import {Forfait} from '../forfait';

@Component({
  selector: 'app-prix-forfait',
  templateUrl: './prix-forfait.component.html',
  styleUrls: ['./prix-forfait.component.sass']
})
export class PrixForfaitComponent implements OnInit {
  @Input () forfait: Forfait;

  constructor() { }

  ngOnInit(): void {
  }

}

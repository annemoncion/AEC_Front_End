import { Component, OnInit } from '@angular/core';
import { HEROS } from '../mock-heros';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.sass']
})
export class Page1Component implements OnInit {
  heros : string[] = HEROS;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HEROS } from '../mock-heros';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.sass']
})
export class Page2Component implements OnInit {
  heros : string[] = HEROS;
  
  constructor() { }

  ngOnInit(): void {
  }

}

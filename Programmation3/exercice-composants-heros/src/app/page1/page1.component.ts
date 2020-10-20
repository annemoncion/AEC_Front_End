import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.sass']
})
export class Page1Component implements OnInit {
  @Input() tabHeros: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}

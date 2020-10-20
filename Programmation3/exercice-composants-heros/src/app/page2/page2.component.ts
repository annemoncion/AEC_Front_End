import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.sass']
})
export class Page2Component implements OnInit {
  @Input() tabHeros: Array<string>;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.sass']
})
export class Hero2Component implements OnInit {
  @Input() hero: string;
  constructor() { }

  ngOnInit(): void {
  }

}

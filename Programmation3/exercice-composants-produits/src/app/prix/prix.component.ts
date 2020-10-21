import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.sass']
})
export class PrixComponent implements OnInit {
  @Input () prix: number;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import { Recherche } from '../recherche';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.sass']
})
export class ListeForfaitsComponent implements OnInit {
  @Input() recherche: Recherche;

  forfaits: Forfait[];

  visibleForfaits: String = 'all';

  constructor(private forfaitService: ForfaitService, private router: Router) { }

  ngOnInit(): void {
    this.getForfaits();
    this.showContent();
    
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
  }

  showContent() : void {
    if(this.router.url === '/forfaits-mexique'){
      this.visibleForfaits = 'mexique' ;
    }
    else if (this.router.url === '/forfaits-cuba') {
      this.visibleForfaits = 'cuba';
    };
  }

}

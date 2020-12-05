import { Component } from '@angular/core';
import { Recherche } from './recherche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app-voyages-anneMoncion';
  showFiller = false;
  recherche: Recherche = {
    dateDepart: new Date,
    nbJours: 0,
    nbEtoiles: 0
  };
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'exercice-composants-heros';
  hero1: string = 'Belette';
  hero2: string = 'Écureuil';
  hero3: string = 'Poisson';
  hero4: string = 'Ara';
  hero5: string = 'Chouette';
  hero6: string = 'Crocodile';
  heros: Array<string> = [
    this.hero1,
    this.hero2,
    this.hero3,
    this.hero4,
    this.hero5,
    this.hero6
  ];
}

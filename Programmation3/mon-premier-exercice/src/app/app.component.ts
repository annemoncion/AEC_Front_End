import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  titrePrincipal = 'Mon premier exercice';
  sousTitre = 'une première à tout';
  description = 'La description d\'un premier projet ne sera pas fort inspirée.';
}

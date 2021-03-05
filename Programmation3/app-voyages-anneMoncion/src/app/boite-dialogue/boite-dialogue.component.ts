import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide
import { Forfait } from '../forfait'
import { Caracteristique } from '../caracteristique'
import { CARACTERISTIQUES } from '../mock-caracteristiques';

@Component({
  selector: 'app-boite-dialogue',
  templateUrl: './boite-dialogue.component.html',
  styleUrls: ['./boite-dialogue.component.sass'],
})
export class BoiteDialogueComponent {

  constructor(
    public dialogRef: MatDialogRef<BoiteDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public newForfait: Forfait) {
  }
  
  caracteristiques: Caracteristique[] = CARACTERISTIQUES;

  labelEtoiles(value: number) {

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  onAnnulerClick(): void {
    this.dialogRef.close();
  }

  get selectedCaracteristiques() {
    return this.caracteristiques
              .filter(opt => opt.active)
              .map(opt => opt.nom)
  }

  /*
  // Validation formulaire sur envoi non-fonctionnelle
  onSave(forfaitFormAjout: NgForm): void {
    if (forfaitFormAjout.valid) {
      this.dialogRef.close();
    }
   }
   */

  updateCaracteristiques(): void {
    this.newForfait.hotel.caracteristiques = this.selectedCaracteristiques;
  }

}

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Forfait } from '../forfait'
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

  labelEtoiles(value: number) {

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  onAnnulerClick(): void {
    this.dialogRef.close();
  }

  caracteristiques: string[] = CARACTERISTIQUES;

}

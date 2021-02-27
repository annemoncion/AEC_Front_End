import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide
import { MatDialog } from '@angular/material/dialog';
import { BoiteDialogueComponent } from '../boite-dialogue/boite-dialogue.component';

import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-tableau-forfaits',
  templateUrl: './tableau-forfaits.component.html',
  styleUrls: ['./tableau-forfaits.component.sass']
})
export class TableauForfaitsComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;

  columnsToDisplay = ['dateDepart', 'dateRetour', 'nomHotel', 'prixForfait', 'actions'];
  forfaits: Forfait[];
  newForfait: Forfait;
  selectedForfait: Forfait;

  constructor(private forfaitService: ForfaitService, public dialog: MatDialog) { }

  ngOnInit(): void {
 
    this.newForfait = {
      _id: null, 
      destination: 'Mexique', 
      villeDepart: 'Canada', 
      hotel: { 
        nom: 'Hôtel no1', 
        coordonnees: 'adresse, nom de rue, adresse', 
        nombreEtoiles: 2, 
        nombreChambres: 1, 
        caracteristiques: ['Face à la plage'] 
      },
      dateDepart: '2020-01-02', 
      dateRetour: '2020-01-08', 
      dateDepartD: '2020-01-01T00:00:00.000Z', 
      dateRetourD: '2020-01-08T00:00:00.000Z', 
      prix: 500, 
      rabais: 0, 
      vedette: false, 
      da: '1996427' 
    };
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
  }

  openDialogNewForfait(): void {
    const dialogRef = this.dialog.open(BoiteDialogueComponent, {
      width: '300px',
      data: this.newForfait
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.newForfait = result;
        console.log(this.newForfait);
        this.forfaitService.addForfait(this.newForfait)
            .subscribe(forfait  => { 
              this.forfaits.push(forfait);
              this.newForfait._id = null; 
              this.newForfait.destination='';
              this.newForfait.villeDepart='';
              this.newForfait.hotel.nom='';
              this.newForfait.hotel.coordonnees='';
              this.newForfait.hotel.nombreEtoiles=1;
              this.newForfait.hotel.nombreChambres=1;
              this.newForfait.hotel.caracteristiques=[];
              this.newForfait.dateDepart='';
              this.newForfait.dateRetour='';
              this.newForfait.dateDepartD='';
              this.newForfait.dateRetourD='';
              this.newForfait.prix=0;
              this.newForfait.rabais=0;
              this.newForfait.vedette=false;
              this.newForfait.da='1996427';
              this.table.renderRows()});
      }
    });
  }

  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait;
  }

  onEdit(forfaitFormEdition: NgForm): void {
    if (forfaitFormEdition.valid) {
      this.forfaitService.updateForfait(this.selectedForfait)
          .subscribe(() => this.selectedForfait = null);
    }
   }
   
   onDelete(forfait: Forfait): void {
    this.forfaitService.deleteForfait(forfait._id)
        .subscribe(result => this.forfaits = this.forfaits.filter(f => f !== forfait));
   }

}

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

  columnsToDisplay = ['actions', 'dateDepart', 'dateRetour', 'nomHotel', 'prixForfait'];
  forfaits: Forfait[];
  newForfait: Forfait;
  selectedForfait: Forfait;

  constructor(private forfaitService: ForfaitService, public dialog: MatDialog) { }

  ngOnInit(): void {
 
    this.newForfait = {
      _id: null, 
      destination: '', 
      villeDepart: '', 
      hotel: { 
        nom: '', 
        coordonnees: '', 
        nombreEtoiles: null, 
        nombreChambres: null, 
        caracteristiques: [] 
      },
      dateDepart: '', 
      dateRetour: '', 
      dateDepartD: '', 
      dateRetourD: '', 
      prix: null, 
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
      if(result) {
        this.newForfait = result;  
        this.forfaitService.addForfait(this.newForfait)
            .subscribe(forfait  => { 
              this.forfaits.push(forfait);
              this.newForfait._id = null; 
              this.newForfait.destination = '';
              this.newForfait.villeDepart = '';
              this.newForfait.hotel.nom = '';
              this.newForfait.hotel.coordonnees = ''; 
              this.newForfait.hotel.nombreEtoiles = null;
              this.newForfait.hotel.nombreChambres = null;
              this.newForfait.hotel.caracteristiques = [];
              this.newForfait.dateDepart = '';
              this.newForfait.dateRetour = '';
              this.newForfait.dateDepartD = '';
              this.newForfait.dateRetourD = '';
              this.newForfait.prix = null;
              this.newForfait.rabais = 0;
              this.newForfait.vedette = false;
              this.newForfait.da = '1996427';
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

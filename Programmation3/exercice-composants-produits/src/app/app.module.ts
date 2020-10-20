import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { ImageComponent } from './image/image.component';
import { NomProduitComponent } from './nom-produit/nom-produit.component';
import { DescriptionComponent } from './description/description.component';
import { PrixComponent } from './prix/prix.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    FicheProduitComponent,
    ImageComponent,
    NomProduitComponent,
    DescriptionComponent,
    PrixComponent,
    LienDetailsComponent,
    PiedDePageComponent,
    ListeProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

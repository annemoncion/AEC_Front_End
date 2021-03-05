import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ForfaitService } from './forfait.service';

import { AppComponent } from './app.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { PrixForfaitComponent } from './prix-forfait/prix-forfait.component';
import { ChartsModule } from 'ng2-charts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

import { ForfaitsVedettePipe } from './forfaits-vedette.pipe';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { AdminComponent } from './admin/admin.component';
import { EnteteComponent } from './entete/entete.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { ForfaitsMexiqueComponent } from './forfaits-mexique/forfaits-mexique.component';
import { ForfaitsCubaComponent } from './forfaits-cuba/forfaits-cuba.component';
import { ForfaitsMexiquePipe } from './forfaits-mexique.pipe';
import { ForfaitsCubaPipe } from './forfaits-cuba.pipe';
import { ForfaitsAccueilPipe } from './forfaits-accueil.pipe';
import { TableauForfaitsComponent } from './tableau-forfaits/tableau-forfaits.component';
import { BoiteDialogueComponent } from './boite-dialogue/boite-dialogue.component';
import { StatsLineChartComponent } from './stats-line-chart/stats-line-chart.component';
import { StatsPieChartComponent } from './stats-pie-chart/stats-pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    ForfaitComponent,
    MiniForfaitComponent,
    EtoilesComponent,
    PrixForfaitComponent,
    ForfaitsVedettePipe,
    FormulaireRechercheComponent,
    AccueilComponent,
    AProposComponent,
    AdminComponent,
    EnteteComponent,
    PiedDePageComponent,
    ForfaitsMexiqueComponent,
    ForfaitsCubaComponent,
    ForfaitsMexiquePipe,
    ForfaitsCubaPipe,
    ForfaitsAccueilPipe,
    TableauForfaitsComponent,
    BoiteDialogueComponent,
    StatsLineChartComponent,
    StatsPieChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSliderModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    ChartsModule,
    MatMenuModule,
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

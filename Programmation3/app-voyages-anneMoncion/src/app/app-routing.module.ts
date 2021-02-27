import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ForfaitsMexiqueComponent } from './forfaits-mexique/forfaits-mexique.component';
import { ForfaitsCubaComponent } from './forfaits-cuba/forfaits-cuba.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { AdminComponent } from './admin/admin.component'


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'forfaits-cuba', component: ForfaitsCubaComponent },
  { path: 'forfaits-mexique', component: ForfaitsMexiqueComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'tableau-de-bord', component: AdminComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

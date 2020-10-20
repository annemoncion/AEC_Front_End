import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { EnteteComponent } from './entete/entete.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { RechercheComponent } from './recherche/recherche.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeroComponent } from './hero/hero.component';
import { Hero2Component } from './hero2/hero2.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    EnteteComponent,
    PiedDePageComponent,
    RechercheComponent,
    CarouselComponent,
    HeroComponent,
    Hero2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

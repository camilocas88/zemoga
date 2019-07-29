import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { MDBBootstrapModule  } from 'angular-bootstrap-md';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { CardsComponent } from './components/cards/cards.component';
import { RouterModule } from '@angular/router';

// servicios
import { CardsService } from './services/cards.service';
import { ImageService } from './services/image.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    CardsComponent
  ],
  imports: [
    
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule 
  ],
  providers: [CardsService, ImageService ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

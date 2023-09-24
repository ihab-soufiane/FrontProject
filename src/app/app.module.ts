import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutComponent } from './Hotels/ajout/ajout.component';
import { ListComponent } from './Hotels/list/list.component';
import { FormsModule } from '@angular/forms';
import { ListVoitureComponent } from './Voitures/list-voiture/list-voiture.component';
import { AjoutVoitureComponent } from './Voitures/ajout-voiture/ajout-voiture.component';
import { HeaderComponent } from './Menu/header/header.component';
import { FooterComponent } from './Menu/footer/footer.component';
import { VoitureComponent } from './Voitures/voiture/voiture.component';
import { HotelComponent } from './Hotels/hotel/hotel.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent,
    ListComponent,
    ListVoitureComponent,
    AjoutVoitureComponent,
    HeaderComponent,
    FooterComponent,
    VoitureComponent,
    HotelComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

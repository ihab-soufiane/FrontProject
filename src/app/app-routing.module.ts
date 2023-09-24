import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './Hotels/ajout/ajout.component';
import { ListComponent } from './Hotels/list/list.component';
import { AjoutVoitureComponent } from './Voitures/ajout-voiture/ajout-voiture.component';
import { ListVoitureComponent } from './Voitures/list-voiture/list-voiture.component';
import { HeaderComponent } from './Menu/header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HotelComponent } from './Hotels/hotel/hotel.component';


const routes: Routes = [
  {path:'addHotel',component:AjoutComponent},
  {path:'list',component:ListComponent}, 
  {path:'addVoiture',component:AjoutVoitureComponent},
  {path:'listVoiture',component:ListVoitureComponent},
  {path:'header',component:HeaderComponent},
  {path:'acceuil',component:AcceuilComponent},
  {path:'hotel',component:HotelComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

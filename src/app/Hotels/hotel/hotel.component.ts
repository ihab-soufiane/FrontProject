import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin-service.service';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  ListHotels:any=[]

  dataHotel={
    Nom:'',
    NbreEtoile:'',
    Description:'',
    image:'',
    Prix:0,
    id:'',
  }

  messageSuccess=''
  constructor(private ds:AdminService,private route:Router ,private act:ActivatedRoute) {
   
    this.ds.gettAllHotel().subscribe(data=>{
      console.log(data)
      this.ListHotels=data
    })
    
   }

  
  getdata(Nom:string,NbreEtoile:string,Description:string,Prix:number,image:string,id:any){
    this.messageSuccess=''
    this.dataHotel.Nom=Nom
    this.dataHotel.NbreEtoile=NbreEtoile
    this.dataHotel.Description=Description
    this.dataHotel.Prix=Prix
    this.dataHotel.image=image
    this.dataHotel.id=id
    console.log(this.dataHotel)
    this.route.navigate(['/list'])

  }

}

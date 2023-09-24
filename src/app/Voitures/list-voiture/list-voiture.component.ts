import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin-service.service';

@Component({
  selector: 'app-list-voiture',
  templateUrl: './list-voiture.component.html',
  styleUrls: ['./list-voiture.component.css']
})
export class ListVoitureComponent {

  ListVoitures:any=[]
 
  dataVoiture={
    nom:'',
    model:'',
    categorie:'',
    image:'',
    prix:0,
    nbrePlace:'',
    puissance:'',
    id:'',
  }

  messageSuccess=''
  constructor(private ds:AdminService,private route:Router) {
   
    this.ds.gettAllVoitures().subscribe(data=>{
      console.log(data)
      this.ListVoitures=data
    })
    
   }

  ngOnInit(): void {
  }


  delete(id:any,i:number){

    this.ds.deleteVoiture(id).subscribe(response=>{
      console.log(response)
       this.ListVoitures.splice(i,1)

    })

  }



  getdata(nom:string,model:string,categorie:string,prix:number,image:string,nbrePlace:string,puissance:string,id:any){
    this.messageSuccess=''
    this.dataVoiture.nom=nom
    this.dataVoiture.model=model
    this.dataVoiture.categorie=categorie
    this.dataVoiture.prix=prix
    this.dataVoiture.image=image
    this.dataVoiture.puissance=puissance
    this.dataVoiture.nbrePlace=nbrePlace
    this.dataVoiture.id=id
    console.log(this.dataVoiture)

  }
  updateHotel(f:any){
    let data=f.value
    this.ds.updateHotels(this.dataVoiture.id,data).subscribe(response=>
      {
     
        let indexId=this.ListVoitures.findIndex((obj:any)=>obj._id==this.dataVoiture.id)

        this.ListVoitures[indexId].nom=data.nom
        this.ListVoitures[indexId].model=data.model
        this.ListVoitures[indexId].categorie=data.categorie
        this.ListVoitures[indexId].prix=data.prix
        this.ListVoitures[indexId].image=data.image
        this.ListVoitures[indexId].puissance=data.puissance
        this.ListVoitures[indexId].nbrePlace=data.nbrePlace

        this.messageSuccess=`this student ${this.ListVoitures[indexId].firstname} is updated`
        console.log(this.ListVoitures)


      })
  }


  details(id:any){

    this.ds.getVoitureById(id).subscribe(data=>{
      console.log(data)
      this.ListVoitures=data
    })
  }

}

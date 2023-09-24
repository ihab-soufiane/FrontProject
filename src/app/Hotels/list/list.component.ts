import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin-service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
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

  ngOnInit(): void {
  }


  delete(id:any,i:number){

    this.ds.deleteHotel(id).subscribe(response=>{
      console.log(response)
       this.ListHotels.splice(i,1)

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
  add(f:any){
    let data=f.value
    // console.log(data)
    this.ds.AddHotel(data).subscribe(response=>{
       console.log(response)

      this.route.navigate(['/list'])

    })  }
/*
  updateHotel(id:any , f:any){
    let data=f.value
    this.ds.updateHotels(this.dataHotel.id,data).subscribe(response=>
      {
     
        let indexId=this.ListHotels.findIndex((obj:any)=>obj._id==this.dataHotel.id)

        this.ListHotels[indexId].Nom=data.Nom
        this.ListHotels[indexId].NbreEtoile=data.NbreEtoile
        this.ListHotels[indexId].Description=data.Description
        this.ListHotels[indexId].Prix=data.Prix
        this.ListHotels[indexId].image=data.image

        this.messageSuccess=`this student ${this.ListHotels[indexId].firstname} is updated`
        console.log(this.ListHotels)


      })
  }

*/


/*updateHotel(){
this.ds.updateHotels(this.dataHotel.id,this.ListHotels).subscribe(res=>{console.log(res);
  this.route.navigate(['/list'])
},
err=>{
  console.log(err)
})
}*/

  details(id:any){

    this.ds.getHotelById(id).subscribe(data=>{
      console.log(data)
      this.ListHotels=data
    })
    
  }
  

}

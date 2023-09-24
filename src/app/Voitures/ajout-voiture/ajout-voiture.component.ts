import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin-service.service';

@Component({
  selector: 'app-ajout-voiture',
  templateUrl: './ajout-voiture.component.html',
  styleUrls: ['./ajout-voiture.component.css']
})
export class AjoutVoitureComponent implements OnInit{
  messageErr=""
  constructor(private ds:AdminService,private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    // console.log(data)
    this.ds.AddVoiture(data).subscribe(response=>{
       console.log(response)

      this.route.navigate(['/listVoiture'])

    })
  }
}

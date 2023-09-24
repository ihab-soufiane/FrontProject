import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  token:any=localStorage.getItem('token')
 
  constructor(private http:HttpClient) { }
  
  AddHotel(body:any){
    return this.http.post('http://127.0.0.1:3000/api/hotels/addHotel',body)
  }
  gettAllHotel(){
    return this.http.get('http://127.0.0.1:3000/api/hotels')
  }
  updateHotels(id:string,newh:any){
    return this.http.put('http://127.0.0.1:3000/api/hotels/update/:id',newh)
  }
  getHotelById(id:any){
    return this.http.get('http://127.0.0.1:3000/api/hotels/:id')
  }
  deleteHotel(id:any){
    return this.http.get('http://127.0.0.1:3000/api/hotels/:id')
  }
  AddVoiture(body:any){
    return this.http.post('http://127.0.0.1:3000/api/voiture/addHotel',body)
  }
  gettAllVoitures(){
    return this.http.get('http://127.0.0.1:3000/api/voitures')
  }
  updateVoiture(id:string,newh:any){
    return this.http.put('http://127.0.0.1:3000/api/voiture/update/:id',newh)
  }
  getVoitureById(id:any){
    return this.http.get('http://127.0.0.1:3000/api/voiture/:id')
  }
  deleteVoiture(id:any){
    return this.http.get('http://127.0.0.1:3000/api/voiture/:id')
  }
  uploadImage(){
    return this.http.get('http://127.0.0.1:3000/api/upload')
  }

}

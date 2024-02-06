import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {

  }

  getAPI() {
    return this.http.get("http://localhost:3000/posts");
  }
  postAPI(dt: any) {
    return this.http.post("http://localhost:3000/posts", dt);
  }
  deleteAPI(dt: any) {
    return this.http.delete("http://localhost:3000/posts/" + dt.id);
  }
  putAPI(dt:any){
    return this.http.put("http://localhost:3000/posts/"+dt.id,dt);
  }

  // for reactive form

  rGetAPI(){
    return this.http.get("http://localhost:3000/reactiveData");
  }
  rPostAPI(dt:any){
    return this.http.post("http://localhost:3000/reactiveData",dt)
  }
  rDeleteAPI(dt:any){
    return this.http.delete("http://localhost:3000/reactiveData/"+dt.id)
  }
  rPutAPI(dt:any){
    return this.http.put("http://localhost:3000/reactiveData/"+dt.id,dt)
  }


}

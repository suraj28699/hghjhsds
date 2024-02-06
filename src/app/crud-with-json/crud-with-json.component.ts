import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-crud-with-json',
  templateUrl: './crud-with-json.component.html',
  styleUrls: ['./crud-with-json.component.css']
})
export class CrudWithJsonComponent {

  public allData: any;
  public idd:any;
  public fn:any;
  public eml:any;
  public ps:any;

  constructor(private ds: ApiServiceService) {
    this.getData();
  }

  getData() {
    this.ds.getAPI().subscribe((res: any) => {
      this.allData = res;
    },(err:any)=>{
      console.log(err);
    })
  }

  onSubmit(dt: any) {
    // console.log(dt.value);
    this.ds.postAPI(dt.value).subscribe((res:any)=>{
      console.log(res);
      this.getData();
    },(err:any)=>{
      console.log(err);
    });
 }

 onDel(dt:any){
  this.ds.deleteAPI(dt).subscribe((res:any)=>{
    this.getData();
  });
 }
 edit(dt:any){
  this.idd=dt.id;
  this.fn=dt.fname;
  this.eml=dt.email;
  this.ps=dt.pass;

 }
 update(dt:any){
  this.ds.putAPI(dt.value).subscribe((res:any)=>{
    this.getData();
  });
 }




}

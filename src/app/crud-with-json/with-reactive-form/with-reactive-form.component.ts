import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-with-reactive-form',
  templateUrl: './with-reactive-form.component.html',
  styleUrls: ['./with-reactive-form.component.css']
})
export class WithReactiveFormComponent {

  public allData: any;

  public myForm = new FormGroup({
    fname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
    num: new FormControl(""),
    gender: new FormControl(""),
    id:new FormControl(''),
  });

  constructor(private api: ApiServiceService) {
    this.getData();
  }
  public isSubmitted: boolean = false;
  forValidation() {
    this.isSubmitted = true;
  }
  onSubmit(dt: any) {
    console.log(dt.value);
    // console.log(typeof (dt.value.num));
    this.api.rPostAPI(dt.value).subscribe((res: any) => {
      this.getData();
    });
  }
  get f() {

    return this.myForm.controls;
  }

  getData() {
    this.api.rGetAPI().subscribe((res: any) => {
      this.allData = res;
    }, (err: any) => {
      console.log(err);
    })
  }

  onDel(dt:any){
    this.api.rDeleteAPI(dt).subscribe((res:any)=>{
      this.getData();
    })
  }

  edit(dt:any){
    this.myForm.setValue(dt);
  }
  update(dt:any){
    this.api.rPutAPI(dt.value).subscribe((res:any)=>{
      this.getData();
    })
  }

}

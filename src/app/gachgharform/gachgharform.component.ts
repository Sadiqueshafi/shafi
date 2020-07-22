import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-gachgharform',
  templateUrl: './gachgharform.component.html',
  styleUrls: ['./gachgharform.component.css']
})
export class GachgharformComponent implements OnInit {

  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']

 public Sex = [ 'Male','Female'];
  Grouping = ['A+','A-','B+','B-','O+',"O-",'AB+','AB-'];
  Rhtype= ['RH Positive', 'RH Negative'];
  BloodForVDRLByStrip = ['RH Positive', 'RH Negative'];
  UrinePregnancyPregStrip = ['Positive','Negative'];
  constructor(private fb:FormBuilder) { }
  JachGhar = this.fb.group({
    date: ['', Validators.required],
    patientName: ['', Validators.required],
    age: ['', Validators.required],
    sex: ['', [Validators.required]],
    dr: ['', Validators.required],
    grouping: ['',],
    rhtype: ['', Validators.required],
    vdrl: ['', Validators.required],
    urine: ['', Validators.required],
    remark: ['', Validators.required],
    serum: ['', Validators.required],
    DateofReport: ['', Validators.required],
  });

  ngOnInit(): void {
  }
  changeSex(e){
    console.log(e.value);
    this.sex.setValue(e.target.value,{
      onlySelf:true
    })
  }
  get sex(){
    return this.JachGhar.get('sex');
  }

  changegrouping(e){
    console.log(e.value);
    this.grouping.setValue(e.target.value,{
      onlySelf:true
    })
  }

  get grouping(){
    return this.JachGhar.get('grouping');
  }
  rhtypes(e){
    this.rhtype.setValue(e.target.value,{
      onlySelf:true
    })
  }
 get rhtype(){
   return this.JachGhar.get('rhtype')
 }

 vdrls(e){
   this.vdrl.setValue(e.target.value,{
     onlySelf:true
   })
 }
 get vdrl(){
   return this.JachGhar.get('vdrl')
 }
 urins(e){
   this.urine.setValue(e.target.value,{
     onlySelf:true
   })
 }
 get urine(){
  return this.JachGhar.get('urine')
}
serums(e){
  this.serum.setValue(e.target.value,{
    onlySelf:true
  })
}
 get serum(){
   return this.JachGhar.get('serum')
 }
  onSubmit(){
    console.log(JSON.stringify(this.JachGhar.value));
  }
}

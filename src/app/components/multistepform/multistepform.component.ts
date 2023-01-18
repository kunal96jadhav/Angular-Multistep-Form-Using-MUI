import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-multistepform',
  templateUrl: './multistepform.component.html',
  styleUrls: ['./multistepform.component.scss']
})
export class MultistepformComponent {
  constructor(private fb:FormBuilder){}
  step: any=1;
  file1:any;
  customerForm=this.fb.group({
    customerDetails:this.fb.group({
      customerId: this.fb.control(''),
      customerName:  this.fb.control(''),
      customerDateOfBirth: this.fb.control(''),
      customerAge: this.fb.control(''),
      customerGender: this.fb.control(''),
      customerEmail:this.fb.control(''),
      customerMobileNumber:this.fb.control(''),
      customerAlternateMobileNumber: this.fb.control(''),
      customerAmountPaidForCar: this.fb.control(''),
      customerTotalLoanRequired:this.fb.control(''),
    }),
  eductionDetails: this.fb.group({
    educationId: this.fb.control(''),
    educationType:this.fb.control(''),
   
  }),
  personlDocuments: this.fb.group({
    documentId:this.fb.control(''),
    addressProof:this.fb.control(''),
    panCard:this.fb.control(''),
    IncomeTax:this.fb.control(''),
    aadharCard:this.fb.control(''),
    photo:this.fb.control(''),
    signature:this.fb.control(''),
  }),
  })
  get customerInfo(){
    return this.customerForm.get("customerDetails") as FormGroup
  }

  get personalInfo(){
    return this.customerForm.get("eductionDetails") as FormGroup
  }
  HandleSubmit(){
    alert()
  }
  submit(){
    // alert("Hello")
    this.step=this.step+1;
    
    let data=new FormData();
    
    if(this.step==4)
    {
    console.log(this.customerForm.value)
    }
  }
  previous(){
    this.step=this.step-1;
  }
  selectAddressProof(event: any){
    console.log(event);
    const addressProof=event.target.files[0];
  }
  selectPancard(event: any){
    console.log(event);
    const pancard=event.target.files[0];
  }
  selectAadharCard(event: any){
    console.log(event);
    const pancard=event.target.files[0];
  }
  selectPhoto(event: any){
    console.log(event)
    const photo=event.target.files[0];
  }
  selectSignatuer(event :any){
    console.log(event)
    const signatuer=event.target.files[0];
  }
  selectSalarySlip(event: any){
    console.log(event)
    const salarySlip=event.target.files[0];
  }
}

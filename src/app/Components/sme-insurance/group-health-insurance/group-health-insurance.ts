import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-group-health-insurance',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './group-health-insurance.html',
  styleUrls: ['./group-health-insurance.css']
})
export class GroupHealthInsurance {

  constructor() {
  console.log('Component Loaded');
}

  showMore: boolean = false;

  toggleReadMore() {
    this.showMore = !this.showMore;
  }

  getQuote() {
    alert("Thank you for your interest! Our team will contact you shortly.");
  }

  downloadBrochure() {
    alert("Brochure download will be available soon.");
  }


  mobileNumber = '';
pincode = '';
companyName = '';
email = '';

submitQuote() {

  if (this.mobileNumber.trim() == "") {
    alert("Please enter mobile number");
    return;
  }

  if (!/^[0-9]{10}$/.test(this.mobileNumber)) {
    alert("Enter valid 10 digit mobile number");
    return;
  }

  if (this.pincode.trim() == "") {
    alert("Please enter pincode");
    return;
  }

  if (!/^[0-9]{6}$/.test(this.pincode)) {
    alert("Enter valid 6 digit pincode");
    return;
  }

  if (this.companyName.trim() == "") {
    alert("Please enter company name");
    return;
  }

  if (this.email.trim() == "") {
    alert("Please enter email");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(this.email)) {
    alert("Enter valid email");
    return;
  }

  alert("Quote submitted successfully!");

  this.mobileNumber="";
  this.pincode="";
  this.companyName="";
  this.email="";
}

selectedFaq = -1;

toggleFaq(index:number){

    if(this.selectedFaq==index){
        this.selectedFaq=-1;
    }
    else{
        this.selectedFaq=index;
    }

}

scrollToQuote(){

const quote=document.querySelector('.quote-box');

quote?.scrollIntoView({
behavior:'smooth'
});

}
//features
expandedCard=-1;

showFeature(index:number){

this.expandedCard=index;

}
//testimonal
likes1=0;

likeReview(){

this.likes1++;

}

//search insurance 

search='';

products=[
'Fire Insurance',
'Marine Insurance',
'Professional Indemnity'
];

filteredProducts(){

return this.products.filter(x=>

x.toLowerCase().includes(this.search.toLowerCase())

);

}

//download broucher 

downloadBrochure1(){

window.open('/brochure.pdf','_blank');

}

//current date 
today=new Date();
}
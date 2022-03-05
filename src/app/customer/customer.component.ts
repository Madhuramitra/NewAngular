import { Component,ViewChild } from '@angular/core';
import { Customer } from "../models/customer";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'customer',
  templateUrl: './customer.component.html'
  
})

export class CustomerComponent{
    Customers:Array<Customer>;
    IsAddNew:boolean;
    FirstName:string;
    LastName:string;
    @ViewChild('myForm') CustomerForm: NgForm;
    constructor(){
        this.FirstName="";
        this.LastName="";
        //this.Reset();
        this.IsAddNew=false;
        this.Customers=new Array<Customer>();
        this.Customers=new Array<Customer>()
        this.Customers.push(new Customer("Suddhasattwa","bhattacharjee"));
        this.Customers.push(new Customer("madhura","mitra"));
        this.Customers.push(new Customer("sreedatri","banerjee"));
        
    }
    Reset(){
        //this.FirstName="";
        //this.LastName="";
        this.CustomerForm.reset(NgForm);
    }
    Save(){
        this.Customers.push(new Customer(this.FirstName,this.LastName));
        this.IsAddNew=false;
        this.Reset();
    }
    AddNew(){
        this.IsAddNew=true;
    }
    //ChangeFirstName(value:string){
       // this.FirstName=value;
    //}
    //ChangeLastName(value:string){
       // this.LastName=value;
    //}
    cancel(){
        this.IsAddNew=false;
        this.Reset();
    }
    
}



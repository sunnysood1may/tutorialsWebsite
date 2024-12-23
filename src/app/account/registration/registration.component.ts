import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accountinfo } from '../accountinfo';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm!: FormGroup;
  datasaved = false;
  massage: string | undefined;
  constructor(private formbuilder:FormBuilder, private accountservice: AccountserviceService, private router:Router) {
    if(localStorage.getItem('Loginuser')){
      router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }

  onSubmit() {  
    let userinfo = this.regForm.value;
    console.log(userinfo);
    this.createuserAccount(userinfo);
    this.regForm.reset();
  }
  createuserAccount(accinfo:Accountinfo) {
    this.accountservice.createaccount(accinfo).subscribe(
      (resResult) => {
          let resp = JSON.stringify(resResult);
          console.log(resp);
          this.datasaved = true;
          this.massage = "User Created"; //resResult['msg'];
          this.regForm.reset();
      }
    )
  }
  

}

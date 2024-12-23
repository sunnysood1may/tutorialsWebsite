import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Output()
  formReady = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) { }

  get email(){  return this.form.get('email')  }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit() {
    //this.formReady.emit(this.form);
  }

}

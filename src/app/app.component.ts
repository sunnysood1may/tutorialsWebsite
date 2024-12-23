import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-project';
  
  constructor(private fb: FormBuilder){}

  form = this.fb.group({});
 
  addChildForm(name: string, group: FormGroup) {
    this.form.addControl(name, group);
  }

  onSubmit() {  console.log(this.form.value);
    const { personal, contact } = this.form.value;
    const message = `Hello ${personal.firstName} ${personal.lastName} (${contact.email})`;
    alert(message);
  }

}

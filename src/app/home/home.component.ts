import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  personForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    age: [18, [Validators.required, Validators.min(18)]],
    email: ['', [Validators.required, this.emailValidation()]]
  });

  result: string;

  constructor(private fb: FormBuilder) { }

  submitForm() {
    console.log(this.personForm);
    this.result = JSON.stringify(this.personForm.value);
    this.personForm.reset();
  }

  emailValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // console.log(control.value);
      let validateEmail = control?.value?.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (validateEmail)
        return null;
      return { 'emailPattern': false };
    }
  }

}

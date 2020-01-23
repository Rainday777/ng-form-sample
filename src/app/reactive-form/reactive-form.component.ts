import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormValidatorDirective, nameValidator } from '../form-validator.directive';
import { AgeValidator } from '../age-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  exampleForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),

  });

  get firstName() {
    return this.exampleForm.controls.firstName;
  }

  get lastName() {
    return this.exampleForm.controls.lastName;
  }
  get age() {
    return this.exampleForm.controls.age;
  }

  ngOnInit(): void {
  }


  constructor(private formBuilder: FormBuilder, private ageValidator: AgeValidator) {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.formBuilder.group({
      firstName: ['', { validators: [Validators.required,  nameValidator('Wasan') ], updateOn: 'submit' }],
      lastName: '',
      age: ['', { validators: Validators.required,
                 asyncValidators: this.ageValidator.validate.bind(this.ageValidator), updateOn: 'submit' } ]

    });
  }

  onSubmit() {
    this.exampleForm.controls.firstName.markAsTouched();
    this.exampleForm.controls.lastName.setValue('Khangmontree');

  }

}

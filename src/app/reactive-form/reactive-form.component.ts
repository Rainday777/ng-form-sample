import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

  ngOnInit(): void {
  }


  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.formBuilder.group({
      firstName: ['', { validators: [Validators.required], updateOn: 'change' }],
      lastName: ''
    });
  }

  onSubmit() {
    alert('form is valid : ' + this.exampleForm.valid);
    this.exampleForm.controls.firstName.markAsTouched();
    this.exampleForm.controls.lastName.setValue('Wasan');

  }

}

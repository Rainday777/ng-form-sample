import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-form-sample';

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
      firstName: ['', { validators: [Validators.required], updateOn: 'submit' }],
      lastName: ''
    });
  }

  onSubmit() {
    alert('form is valid : ' + this.exampleForm.valid);
    this.exampleForm.controls.firstName.markAsTouched();
  }




}

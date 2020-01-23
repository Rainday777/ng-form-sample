import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  submitted = false;
  firstName = '';
  lastName = '';
  ageNum: number;
  constructor() { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    this.submitted = true;
    form.controls.fname.markAsTouched();
    form.controls.lname.setValue('Khangmontree');
    alert('form is valid : ' + this.firstName);
  }

}

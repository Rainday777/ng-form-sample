import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  submitted = false;
  firstName = '';
  lastName = '';
  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
  }

}

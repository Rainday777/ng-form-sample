import { Directive, forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl } from '@angular/forms';
import { AgeValidator } from './age-validator';

@Directive({
  selector: '[appAgeValidate]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AgeValidator),
      multi: true
    }
  ]
})
export class AgeValidateDirective {

  constructor(private validator: AgeValidator) { }

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }

}

import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appFormValidator]'
})
export class FormValidatorDirective {

  constructor() { }

}

export function nameValidator(nameRe: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = (nameRe !== control.value);
    return forbidden ? {forbiddenName: {value: nameRe}} : null;
  };
}

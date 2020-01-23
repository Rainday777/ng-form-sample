import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';

export class SymbolValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return null;
  }



}

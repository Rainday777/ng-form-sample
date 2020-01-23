import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { DummyService } from './dummy.service';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AgeValidator implements AsyncValidator {

  constructor(private service: DummyService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const age = control.value as number;
    return this.service.getEmployee().pipe(
      map(item => {
        return (item.find(i => {
          return Math.abs(i.age - age) < 0.00001;
        })) ? null : { ageNotFound: true };
      }),
      catchError(() => of(null))
    );
  }

}

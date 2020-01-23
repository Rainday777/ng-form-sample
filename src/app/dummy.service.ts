import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponeData, Employee } from './employee';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
     return this.http.get('http://dummy.restapiexample.com/api/v1/employees').pipe(
       map((res: any) => {
            return res.data.map((item: any) => {
                    const em: Employee = {
                                          id: item.id,
                                          name: item.employee_name,
                                          salary: item.employee_salary,
                                          age: item.employee_age,
                                          image: item.emplyee_image,
                                          };
                    return em;
                  }
            );
          }
       )

    );


    //return null;

  }
}

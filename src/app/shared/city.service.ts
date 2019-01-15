import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  cities = [
    'Tokyo',
    'Kyoto',
    'Seattle',
    'San Francisco',
    'Denver'
  ];

  constructor() { }

  getCities(): Observable<any> {
    return of(this.cities);
  }
}

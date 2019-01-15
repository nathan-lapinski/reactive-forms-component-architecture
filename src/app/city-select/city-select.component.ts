import { Component, OnInit } from '@angular/core';
import { CityService } from '../shared/city.service';
import { AbstractControl, FormBuilder, FormControl } from '@angular/forms';



@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.css']
})
export class CitySelectComponent implements OnInit {
  cities$;
  city = new FormControl('', TestValidator);
  constructor(private citySerivce: CityService, private fb: FormBuilder) { }

  form = this.fb.group({
    citySelect: this.city
  });

  ngOnInit() {
    this.cities$ = this.citySerivce.getCities();
  }

  valChange(control): void {
    console.log('Container component received: ', control);
    this.city.patchValue(control);
  }
}

// TODO: Container takes inputs from the preso...and sets them as the value on its control using patchVal?
const TestValidator = (control: AbstractControl): {[key: string]: boolean} => {
  console.log('ttt', control, control.value);
  // TOOD: Need to validate whenever control.value is defined
  return {};
};

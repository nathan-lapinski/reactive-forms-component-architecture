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
  city = new FormControl('', CustomValidator);
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

const CustomValidator = (control: AbstractControl): {[key: string]: boolean} => {
  console.log('container componenet: ', control, control.value);
  return control.value ? null : { noCity: true };
};

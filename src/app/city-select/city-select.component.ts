import { Component, OnInit } from '@angular/core';
import { CityService } from '../shared/city.service';



@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.css']
})
export class CitySelectComponent implements OnInit {
  cities$;
  constructor(private citySerivce: CityService) { }

  ngOnInit() {
    this.cities$ = this.citySerivce.getCities();
  }

}

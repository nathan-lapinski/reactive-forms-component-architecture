import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-city-select-ui',
  templateUrl: './city-select-ui.component.html',
})
export class CitySelectUIComponent implements OnInit {
  city = new FormControl('');
  @Input() cities;
  constructor() { }

  ngOnInit() {
  }

}

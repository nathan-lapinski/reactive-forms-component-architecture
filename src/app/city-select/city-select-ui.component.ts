import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-city-select-ui',
  templateUrl: './city-select-ui.component.html',
})
export class CitySelectUIComponent implements OnInit {
  @Input() cities;
  @Output() citySelect = new EventEmitter<any>();
  city = new FormControl('');

  constructor() { }

  ngOnInit() {
    // does this still work properly if the @Input data changes? Probably need to put this in the OnChanges hook instead
    this.city.patchValue(this.cities[0]);
    // initial emit
    this.citySelect.emit(this.city.value);
    // Could simply emit the value (control), or the entire control, or some custom object. Need to decide on the API for this preso comp
    this.city.valueChanges.subscribe((value) => this.citySelect.emit(value));
  }
}


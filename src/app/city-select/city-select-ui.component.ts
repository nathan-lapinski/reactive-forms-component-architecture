import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-city-select-ui',
  templateUrl: './city-select-ui.component.html',
})
export class CitySelectUIComponent implements OnInit {
  @Input() cities;
  @Output() citySelect = new EventEmitter<FormControl>();
  city = new FormControl('', [Validators.required, TestValidator]);

  // TODO: Is this group needed? It may need to live in the container component...a control should be enough for the UI.
  form = this.fb.group({
    city: this.city
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // does this still work properly if the @Input data changes? Probably need to put this in the OnChanges hook instead
    this.city.patchValue(this.cities[0]);
    // initial emit
    this.citySelect.emit(this.city);
    // Could simply emit the value (control), or the entire control, or some custom object. Need to decide on the API for this preso comp
    this.city.valueChanges.subscribe( (control: FormControl) => this.citySelect.emit(this.city));
  }
}

const TestValidator = (control: AbstractControl): {[key: string]: boolean} => {
  console.log('ttt', control, control.value);
  return {};
};

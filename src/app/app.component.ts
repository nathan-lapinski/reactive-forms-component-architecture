import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms-architecture';

  rootForm;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.rootForm = this.fb.group({
      test: new FormGroup({}, [Validators.required])
      // TODO: Do they get added here, or do the child components create their own formgroups?
      // creatives: this.createCreativesForm,
      // inventoryTargeting: this.inventoryTargetingForm,
      // lineItems: this.createLineItemsForm,
      // orders: this.createOrdersForm
    });
  }
}

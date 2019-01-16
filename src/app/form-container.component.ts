import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {
  // TODO: This should build a formGroup for each part of the form. It can emit its values up to a parent
  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    // TODO: Should this create and pass the controls into its children?
  });

  ngOnInit() {
  }

  updateForm(event) {
    console.log('Root container: ', event);
    // ...or should it receive the controls from its children here?
  }

}

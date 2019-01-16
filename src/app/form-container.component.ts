import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {
  // TODO: This should build a formGroup for each part of the form. It can emit its values up to a parent
  constructor() { }

  ngOnInit() {
  }

}

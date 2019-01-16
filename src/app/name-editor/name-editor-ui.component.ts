import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor-ui',
  templateUrl: './name-editor-ui.component.html',
  styleUrls: ['./name-editor-ui.component.css']
})
export class NameEditorUiComponent implements OnInit {
  @Output() nameSelect = new EventEmitter<any>();
  name = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.name.valueChanges.subscribe(name => this.nameSelect.emit(name));
  }
}

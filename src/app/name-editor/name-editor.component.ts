import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('', [CustomValidator, Validators.minLength(3)]);
  @Output() formStatus = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    nameSelect: this.name
  });

  ngOnInit() {
    // TODO: emit formValiidy changes...and value changes?
    this.form.statusChanges.subscribe(status => this.formStatus.emit(status));
  }

  updateName(name) {
    this.name.patchValue(name);
  }
}

const CustomValidator = (control: AbstractControl): {[key: string]: boolean} => {
  console.log('container componenet: ', control, control.value);
  return control.value ? null : { noName: true };
};

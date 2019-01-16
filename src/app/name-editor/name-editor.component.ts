import { Component } from '@angular/core';
import { FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('', [CustomValidator, Validators.minLength(3)]);

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    nameSelect: this.name
  });

  updateName(name) {
    this.name.patchValue(name);
  }
}

const CustomValidator = (control: AbstractControl): {[key: string]: boolean} => {
  console.log('container componenet: ', control, control.value);
  return control.value ? null : { noName: true };
};

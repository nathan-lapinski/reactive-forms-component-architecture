import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEditorUiComponent } from './name-editor-ui.component';

describe('NameEditorUiComponent', () => {
  let component: NameEditorUiComponent;
  let fixture: ComponentFixture<NameEditorUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameEditorUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameEditorUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

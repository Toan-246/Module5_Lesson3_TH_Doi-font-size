import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSideEditorComponent } from './font-side-editor.component';

describe('FontSideEditorComponent', () => {
  let component: FontSideEditorComponent;
  let fixture: ComponentFixture<FontSideEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSideEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSideEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

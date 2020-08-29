import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmarksComponent } from './editmarks.component';

describe('EditmarksComponent', () => {
  let component: EditmarksComponent;
  let fixture: ComponentFixture<EditmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

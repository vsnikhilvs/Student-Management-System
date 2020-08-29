import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamdetailsComponent } from './examdetails.component';

describe('ExamdetailsComponent', () => {
  let component: ExamdetailsComponent;
  let fixture: ComponentFixture<ExamdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

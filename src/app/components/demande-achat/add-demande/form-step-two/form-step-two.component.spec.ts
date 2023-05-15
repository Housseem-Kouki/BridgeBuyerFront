import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStepTwoComponent } from './form-step-two.component';

describe('FormStepTwoComponent', () => {
  let component: FormStepTwoComponent;
  let fixture: ComponentFixture<FormStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStepTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

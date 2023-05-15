import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdressExpedComponent } from './all-adress-exped.component';

describe('AllAdressExpedComponent', () => {
  let component: AllAdressExpedComponent;
  let fixture: ComponentFixture<AllAdressExpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAdressExpedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAdressExpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdresseExpedComponent } from './create-adresse-exped.component';

describe('CreateAdresseExpedComponent', () => {
  let component: CreateAdresseExpedComponent;
  let fixture: ComponentFixture<CreateAdresseExpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdresseExpedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdresseExpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

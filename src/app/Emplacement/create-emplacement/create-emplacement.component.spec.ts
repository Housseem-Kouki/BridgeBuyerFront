import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmplacementComponent } from './create-emplacement.component';

describe('CreateEmplacementComponent', () => {
  let component: CreateEmplacementComponent;
  let fixture: ComponentFixture<CreateEmplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmplacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

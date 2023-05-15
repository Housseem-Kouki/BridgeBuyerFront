import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepartementComponent } from './create-departement.component';

describe('CreateDepartementComponent', () => {
  let component: CreateDepartementComponent;
  let fixture: ComponentFixture<CreateDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

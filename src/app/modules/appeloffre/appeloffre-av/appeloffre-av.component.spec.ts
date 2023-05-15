import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppeloffreAvComponent } from './appeloffre-av.component';

describe('AppeloffreAvComponent', () => {
  let component: AppeloffreAvComponent;
  let fixture: ComponentFixture<AppeloffreAvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppeloffreAvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppeloffreAvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

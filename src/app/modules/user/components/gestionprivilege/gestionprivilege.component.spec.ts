import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionprivilegeComponent } from './gestionprivilege.component';

describe('GestionprivilegeComponent', () => {
  let component: GestionprivilegeComponent;
  let fixture: ComponentFixture<GestionprivilegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionprivilegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionprivilegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeachatoperateurComponent } from './demandeachatoperateur.component';

describe('DemandeachatoperateurComponent', () => {
  let component: DemandeachatoperateurComponent;
  let fixture: ComponentFixture<DemandeachatoperateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeachatoperateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeachatoperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

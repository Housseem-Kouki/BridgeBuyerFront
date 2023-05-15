import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisFournisseurComponent } from './devis-fournisseur.component';

describe('DevisFournisseurComponent', () => {
  let component: DevisFournisseurComponent;
  let fixture: ComponentFixture<DevisFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevisFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurLayoutComponent } from './fournisseur-layout.component';

describe('FournisseurLayoutComponent', () => {
  let component: FournisseurLayoutComponent;
  let fixture: ComponentFixture<FournisseurLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

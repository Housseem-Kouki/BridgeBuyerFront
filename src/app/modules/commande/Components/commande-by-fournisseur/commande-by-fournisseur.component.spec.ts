import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeByFournisseurComponent } from './commande-by-fournisseur.component';

describe('CommandeByFournisseurComponent', () => {
  let component: CommandeByFournisseurComponent;
  let fixture: ComponentFixture<CommandeByFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeByFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeByFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

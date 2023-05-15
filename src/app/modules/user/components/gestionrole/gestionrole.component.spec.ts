import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionroleComponent } from './gestionrole.component';

describe('GestionroleComponent', () => {
  let component: GestionroleComponent;
  let fixture: ComponentFixture<GestionroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionroleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

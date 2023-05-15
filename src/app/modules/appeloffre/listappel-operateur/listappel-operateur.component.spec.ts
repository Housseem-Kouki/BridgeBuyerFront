import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListappelOperateurComponent } from './listappel-operateur.component';

describe('ListappelOperateurComponent', () => {
  let component: ListappelOperateurComponent;
  let fixture: ComponentFixture<ListappelOperateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListappelOperateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListappelOperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

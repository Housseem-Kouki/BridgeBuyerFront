import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeByUserComponent } from './commande-by-user.component';

describe('CommandeByUserComponent', () => {
  let component: CommandeByUserComponent;
  let fixture: ComponentFixture<CommandeByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeByUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

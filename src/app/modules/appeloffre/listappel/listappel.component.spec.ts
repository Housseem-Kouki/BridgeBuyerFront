import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListappelComponent } from './listappel.component';

describe('ListappelComponent', () => {
  let component: ListappelComponent;
  let fixture: ComponentFixture<ListappelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListappelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmplacementsComponent } from './list-emplacements.component';

describe('ListEmplacementsComponent', () => {
  let component: ListEmplacementsComponent;
  let fixture: ComponentFixture<ListEmplacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmplacementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmplacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

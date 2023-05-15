import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmplacementComponent } from './view-emplacement.component';

describe('ViewEmplacementComponent', () => {
  let component: ViewEmplacementComponent;
  let fixture: ComponentFixture<ViewEmplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmplacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

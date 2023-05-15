import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateappelComponent } from './createappel.component';

describe('CreateappelComponent', () => {
  let component: CreateappelComponent;
  let fixture: ComponentFixture<CreateappelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateappelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

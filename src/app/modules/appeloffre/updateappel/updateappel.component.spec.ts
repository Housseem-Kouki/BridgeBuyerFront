import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateappelComponent } from './updateappel.component';

describe('UpdateappelComponent', () => {
  let component: UpdateappelComponent;
  let fixture: ComponentFixture<UpdateappelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateappelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

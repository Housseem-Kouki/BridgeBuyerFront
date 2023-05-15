import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateoffreComponent } from './updateoffre.component';

describe('UpdateoffreComponent', () => {
  let component: UpdateoffreComponent;
  let fixture: ComponentFixture<UpdateoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateoffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

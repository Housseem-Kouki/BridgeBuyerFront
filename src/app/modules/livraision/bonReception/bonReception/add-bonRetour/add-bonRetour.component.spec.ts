/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddBonRetourComponent } from './add-bonRetour.component';

describe('AddBonRetourComponent', () => {
  let component: AddBonRetourComponent;
  let fixture: ComponentFixture<AddBonRetourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBonRetourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBonRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

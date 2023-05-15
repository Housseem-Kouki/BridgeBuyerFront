/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddFactureAvoirComponent } from './add-factureAvoir.component';

describe('AddFactureAvoirComponent', () => {
  let component: AddFactureAvoirComponent;
  let fixture: ComponentFixture<AddFactureAvoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFactureAvoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFactureAvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

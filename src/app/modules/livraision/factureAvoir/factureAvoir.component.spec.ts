/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FactureAvoirComponent } from './factureAvoir.component';

describe('FactureAvoirComponent', () => {
  let component: FactureAvoirComponent;
  let fixture: ComponentFixture<FactureAvoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureAvoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureAvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

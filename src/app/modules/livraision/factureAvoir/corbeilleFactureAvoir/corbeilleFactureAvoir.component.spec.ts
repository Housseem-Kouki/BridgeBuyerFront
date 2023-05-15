/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CorbeilleFactureAvoirComponent } from './corbeilleFactureAvoir.component';

describe('CorbeilleFactureAvoirComponent', () => {
  let component: CorbeilleFactureAvoirComponent;
  let fixture: ComponentFixture<CorbeilleFactureAvoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorbeilleFactureAvoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilleFactureAvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

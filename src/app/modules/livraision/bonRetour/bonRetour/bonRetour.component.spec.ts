/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BonRetourComponent } from './bonRetour.component';

describe('BonRetourComponent', () => {
  let component: BonRetourComponent;
  let fixture: ComponentFixture<BonRetourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonRetourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

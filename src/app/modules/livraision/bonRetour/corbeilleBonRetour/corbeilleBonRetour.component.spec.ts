/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CorbeilleBonRetourComponent } from './corbeilleBonRetour.component';

describe('CorbeilleBonRetourComponent', () => {
  let component: CorbeilleBonRetourComponent;
  let fixture: ComponentFixture<CorbeilleBonRetourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorbeilleBonRetourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilleBonRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatdevisComponent } from './creatdevis.component';

describe('CreatdevisComponent', () => {
  let component: CreatdevisComponent;
  let fixture: ComponentFixture<CreatdevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatdevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

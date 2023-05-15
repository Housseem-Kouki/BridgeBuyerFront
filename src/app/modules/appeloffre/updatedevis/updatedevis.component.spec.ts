import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedevisComponent } from './updatedevis.component';

describe('UpdatedevisComponent', () => {
  let component: UpdatedevisComponent;
  let fixture: ComponentFixture<UpdatedevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdevisComponent } from './listdevis.component';

describe('ListdevisComponent', () => {
  let component: ListdevisComponent;
  let fixture: ComponentFixture<ListdevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

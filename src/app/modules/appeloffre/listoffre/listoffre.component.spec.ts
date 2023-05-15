import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoffreComponent } from './listoffre.component';

describe('ListoffreComponent', () => {
  let component: ListoffreComponent;
  let fixture: ComponentFixture<ListoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListoffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

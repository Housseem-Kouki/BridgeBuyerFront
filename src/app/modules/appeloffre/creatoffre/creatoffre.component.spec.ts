import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatoffreComponent } from './creatoffre.component';

describe('CreatoffreComponent', () => {
  let component: CreatoffreComponent;
  let fixture: ComponentFixture<CreatoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatoffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdevisComponent } from './detailsdevis.component';

describe('DetailsdevisComponent', () => {
  let component: DetailsdevisComponent;
  let fixture: ComponentFixture<DetailsdevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsdevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

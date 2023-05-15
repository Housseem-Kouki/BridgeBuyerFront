import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsappelComponent } from './detailsappel.component';

describe('DetailsappelComponent', () => {
  let component: DetailsappelComponent;
  let fixture: ComponentFixture<DetailsappelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsappelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

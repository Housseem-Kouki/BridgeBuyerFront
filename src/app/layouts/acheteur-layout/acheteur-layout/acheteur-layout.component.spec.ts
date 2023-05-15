import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheteurLayoutComponent } from './acheteur-layout.component';

describe('AcheteurLayoutComponent', () => {
  let component: AcheteurLayoutComponent;
  let fixture: ComponentFixture<AcheteurLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcheteurLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcheteurLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

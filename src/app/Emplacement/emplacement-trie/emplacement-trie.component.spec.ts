import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplacementTrieComponent } from './emplacement-trie.component';

describe('EmplacementTrieComponent', () => {
  let component: EmplacementTrieComponent;
  let fixture: ComponentFixture<EmplacementTrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplacementTrieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplacementTrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

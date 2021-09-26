import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeAndConcatMapComponent } from './merge-and-concat-map.component';

describe('MergeAndConcatMapComponent', () => {
  let component: MergeAndConcatMapComponent;
  let fixture: ComponentFixture<MergeAndConcatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeAndConcatMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeAndConcatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

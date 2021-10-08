import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateOperatorsNavBarComponent } from './intermediate-operators-nav-bar.component';

describe('NavBarComponent', () => {
  let component: IntermediateOperatorsNavBarComponent;
  let fixture: ComponentFixture<IntermediateOperatorsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntermediateOperatorsNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediateOperatorsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

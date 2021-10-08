import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedOperatorsNavBarComponent } from './advanced-operators-nav-bar.component';

describe('NavBarComponent', () => {
  let component: AdvancedOperatorsNavBarComponent;
  let fixture: ComponentFixture<AdvancedOperatorsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedOperatorsNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedOperatorsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

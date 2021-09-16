import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperatorsNavBarComponent } from './basic-operators-nav-bar.component';

describe('NavBarComponent', () => {
  let component: BasicOperatorsNavBarComponent;
  let fixture: ComponentFixture<BasicOperatorsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperatorsNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperatorsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

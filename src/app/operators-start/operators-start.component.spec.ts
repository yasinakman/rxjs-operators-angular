import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsStartComponent } from './operators-start.component';

describe('RecipeStartComponent', () => {
  let component: OperatorsStartComponent;
  let fixture: ComponentFixture<OperatorsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorsStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

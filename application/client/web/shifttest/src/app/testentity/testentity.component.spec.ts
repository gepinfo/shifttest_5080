import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestentityComponent } from './testentity.component';

describe('TestentityComponent', () => {
  let component: TestentityComponent;
  let fixture: ComponentFixture<TestentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
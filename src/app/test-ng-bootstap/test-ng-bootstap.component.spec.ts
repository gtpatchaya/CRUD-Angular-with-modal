import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgBootstapComponent } from './test-ng-bootstap.component';


describe('TestNgBootstapComponent', () => {
  let component: TestNgBootstapComponent;
  let fixture: ComponentFixture<TestNgBootstapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgBootstapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgBootstapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

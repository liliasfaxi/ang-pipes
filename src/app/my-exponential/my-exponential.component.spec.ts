import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExponentialComponent } from './my-exponential.component';

describe('MyExponentialComponent', () => {
  let component: MyExponentialComponent;
  let fixture: ComponentFixture<MyExponentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExponentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExponentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

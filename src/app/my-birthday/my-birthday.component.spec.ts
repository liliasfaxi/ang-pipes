import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBirthdayComponent } from './my-birthday.component';

describe('MyBirthdayComponent', () => {
  let component: MyBirthdayComponent;
  let fixture: ComponentFixture<MyBirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

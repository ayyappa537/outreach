import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwillingnessComponent } from './viewwillingness.component';

describe('ViewwillingnessComponent', () => {
  let component: ViewwillingnessComponent;
  let fixture: ComponentFixture<ViewwillingnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewwillingnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwillingnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

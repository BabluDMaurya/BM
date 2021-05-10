import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalenderMonthWeekTimeComponent } from './calender-month-week-time.component';

describe('CalenderMonthWeekTimeComponent', () => {
  let component: CalenderMonthWeekTimeComponent;
  let fixture: ComponentFixture<CalenderMonthWeekTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderMonthWeekTimeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalenderMonthWeekTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

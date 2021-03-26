import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DateTestPage } from './date-test.page';

describe('DateTestPage', () => {
  let component: DateTestPage;
  let fixture: ComponentFixture<DateTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DateTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

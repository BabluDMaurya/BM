import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationControlPage } from './notification-control.page';

describe('NotificationControlPage', () => {
  let component: NotificationControlPage;
  let fixture: ComponentFixture<NotificationControlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationControlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

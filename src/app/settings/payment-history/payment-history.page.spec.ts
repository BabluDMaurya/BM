import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentHistoryPage } from './payment-history.page';

describe('PaymentHistoryPage', () => {
  let component: PaymentHistoryPage;
  let fixture: ComponentFixture<PaymentHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

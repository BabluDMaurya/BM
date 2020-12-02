import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentReviewPage } from './payment-review.page';

describe('PaymentReviewPage', () => {
  let component: PaymentReviewPage;
  let fixture: ComponentFixture<PaymentReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnboardingAccountPage } from './onboarding-account.page';

describe('OnboardingAccountPage', () => {
  let component: OnboardingAccountPage;
  let fixture: ComponentFixture<OnboardingAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

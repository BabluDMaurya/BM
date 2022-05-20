import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermsConditionComponent } from './terms-condition.component';

describe('TermsConditionComponent', () => {
  let component: TermsConditionComponent;
  let fixture: ComponentFixture<TermsConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsConditionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermsConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

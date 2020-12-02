import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FixedFooterComponent } from './fixed-footer.component';

describe('FixedFooterComponent', () => {
  let component: FixedFooterComponent;
  let fixture: ComponentFixture<FixedFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedFooterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FixedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

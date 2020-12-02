import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommonSliderPage } from './common-slider.page';

describe('CommonSliderPage', () => {
  let component: CommonSliderPage;
  let fixture: ComponentFixture<CommonSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSliderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

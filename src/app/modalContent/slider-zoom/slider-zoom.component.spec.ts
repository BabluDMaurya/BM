import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderZoomComponent } from './slider-zoom.component';

describe('SliderZoomComponent', () => {
  let component: SliderZoomComponent;
  let fixture: ComponentFixture<SliderZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderZoomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

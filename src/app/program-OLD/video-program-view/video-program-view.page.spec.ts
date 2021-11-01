import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoProgramViewPage } from './video-program-view.page';

describe('VideoProgramViewPage', () => {
  let component: VideoProgramViewPage;
  let fixture: ComponentFixture<VideoProgramViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoProgramViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoProgramViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

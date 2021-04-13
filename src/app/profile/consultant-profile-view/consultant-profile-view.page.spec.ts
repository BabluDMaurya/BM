import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultantProfileViewPage } from './consultant-profile-view.page';

describe('ConsultantProfileViewPage', () => {
  let component: ConsultantProfileViewPage;
  let fixture: ComponentFixture<ConsultantProfileViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantProfileViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultantProfileViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

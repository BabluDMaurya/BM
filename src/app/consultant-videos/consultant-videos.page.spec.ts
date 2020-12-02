import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultantVideosPage } from './consultant-videos.page';

describe('ConsultantVideosPage', () => {
  let component: ConsultantVideosPage;
  let fixture: ComponentFixture<ConsultantVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantVideosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultantVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

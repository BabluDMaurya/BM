import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideosThumbListComponent } from './videos-thumb-list.component';

describe('VideoThumbListComponent', () => {
  let component: VideosThumbListComponent;
  let fixture: ComponentFixture<VideosThumbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosThumbListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideosThumbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

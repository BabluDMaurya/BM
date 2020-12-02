import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideosPage } from './videos.page';

describe('VideosPage', () => {
  let component: VideosPage;
  let fixture: ComponentFixture<VideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

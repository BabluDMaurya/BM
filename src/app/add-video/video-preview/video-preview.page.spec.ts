import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoPreviewPage } from './video-preview.page';

describe('VideoPreviewPage', () => {
  let component: VideoPreviewPage;
  let fixture: ComponentFixture<VideoPreviewPage>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    fixture = TestBed.createComponent(VideoPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
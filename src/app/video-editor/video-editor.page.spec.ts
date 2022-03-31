import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoEditorPage } from './video-editor.page';

describe('VideoEditorPage', () => {
  let component: VideoEditorPage;
  let fixture: ComponentFixture<VideoEditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoEditorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudioPlayerProgramComponent } from './audio-player-program.component';

describe('AudioPlayerComponent', () => {
  let component: AudioPlayerProgramComponent;
  let fixture: ComponentFixture<AudioPlayerProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioPlayerProgramComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioPlayerProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

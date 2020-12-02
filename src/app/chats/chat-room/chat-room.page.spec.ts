import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

<<<<<<< HEAD:src/app/chats/chat-room/chat-room.page.spec.ts
import { ChatRoomPage } from './chat-room.page';

describe('ChatRoomPage', () => {
  let component: ChatRoomPage;
  let fixture: ComponentFixture<ChatRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatRoomPage);
=======
import { AudioPlayerComponent } from './audio-player.component';

describe('AudioPlayerComponent', () => {
  let component: AudioPlayerComponent;
  let fixture: ComponentFixture<AudioPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioPlayerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioPlayerComponent);
>>>>>>> 0c11861b957759d0a9216a17831dd7785e7c3152:src/app/add-video/audio-player/audio-player.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

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
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

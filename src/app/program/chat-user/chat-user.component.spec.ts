import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatUserComponent } from './chat-user.component';

describe('ChatUserComponent', () => {
  let component: ChatUserComponent;
  let fixture: ComponentFixture<ChatUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatUserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

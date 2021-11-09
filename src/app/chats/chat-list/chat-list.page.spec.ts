import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatListPage } from './chat-list.page';

describe('ChatListPage', () => {
  let component: ChatListPage;
  let fixture: ComponentFixture<ChatListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

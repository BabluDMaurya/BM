import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SponcerChatPage } from './sponcer-chat.page';

describe('SponcerChatPage', () => {
  let component: SponcerChatPage;
  let fixture: ComponentFixture<SponcerChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponcerChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SponcerChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

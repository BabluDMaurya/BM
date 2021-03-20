import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicplayerPage } from './musicplayer.page';

describe('MusicplayerPage', () => {
  let component: MusicplayerPage;
  let fixture: ComponentFixture<MusicplayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicplayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

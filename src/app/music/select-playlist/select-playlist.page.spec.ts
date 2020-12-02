import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectPlaylistPage } from './select-playlist.page';

describe('SelectPlaylistPage', () => {
  let component: SelectPlaylistPage;
  let fixture: ComponentFixture<SelectPlaylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPlaylistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectPlaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

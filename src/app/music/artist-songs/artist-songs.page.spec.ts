import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtistSongsPage } from './artist-songs.page';

describe('ArtistSongsPage', () => {
  let component: ArtistSongsPage;
  let fixture: ComponentFixture<ArtistSongsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSongsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistSongsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

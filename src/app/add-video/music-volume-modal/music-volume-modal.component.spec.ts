import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicVolumeModalComponent } from './music-volume-modal.component';

describe('MusicVolumeModalComponent', () => {
  let component: MusicVolumeModalComponent;
  let fixture: ComponentFixture<MusicVolumeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicVolumeModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicVolumeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

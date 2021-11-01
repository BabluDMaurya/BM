import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicVolComponent } from './music-vol.component';

describe('MusicVolComponent', () => {
  let component: MusicVolComponent;
  let fixture: ComponentFixture<MusicVolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicVolComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

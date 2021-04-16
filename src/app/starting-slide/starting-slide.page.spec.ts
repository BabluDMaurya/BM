import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartingSlidePage } from './starting-slide.page';

describe('StartingSlidePage', () => {
  let component: StartingSlidePage;
  let fixture: ComponentFixture<StartingSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartingSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

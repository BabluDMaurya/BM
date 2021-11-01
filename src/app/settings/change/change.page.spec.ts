import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangePage } from './change.page';

describe('ChangePage', () => {
  let component: ChangePage;
  let fixture: ComponentFixture<ChangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstMessagePage } from './first-message.page';

describe('FirstMessagePage', () => {
  let component: FirstMessagePage;
  let fixture: ComponentFixture<FirstMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

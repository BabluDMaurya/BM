import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimplebroadcasterPage } from './simplebroadcaster.page';

describe('SimplebroadcasterPage', () => {
  let component: SimplebroadcasterPage;
  let fixture: ComponentFixture<SimplebroadcasterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplebroadcasterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimplebroadcasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BroadcasterPage } from './broadcaster.page';

describe('BroadcasterPage', () => {
  let component: BroadcasterPage;
  let fixture: ComponentFixture<BroadcasterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcasterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BroadcasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabFollowersPage } from './tab-followers.page';

describe('TabFollowersPage', () => {
  let component: TabFollowersPage;
  let fixture: ComponentFixture<TabFollowersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFollowersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabFollowersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

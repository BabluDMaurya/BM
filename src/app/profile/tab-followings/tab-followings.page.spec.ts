import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabFollowingsPage } from './tab-followings.page';

describe('TabFollowingsPage', () => {
  let component: TabFollowingsPage;
  let fixture: ComponentFixture<TabFollowingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFollowingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabFollowingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserProfileViewPage } from './user-profile-view.page';

describe('UserProfileViewPage', () => {
  let component: UserProfileViewPage;
  let fixture: ComponentFixture<UserProfileViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowingPopupComponent } from './following-popup.component';

describe('FollowingPopupComponent', () => {
  let component: FollowingPopupComponent;
  let fixture: ComponentFixture<FollowingPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingPopupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowersComponent } from './followers.component';

describe('FollowersComponent', () => {
  let component: FollowersComponent;
  let fixture: ComponentFixture<FollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

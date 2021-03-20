import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostTabComponent } from './post-tab.component';

describe('PostTabComponent', () => {
  let component: PostTabComponent;
  let fixture: ComponentFixture<PostTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

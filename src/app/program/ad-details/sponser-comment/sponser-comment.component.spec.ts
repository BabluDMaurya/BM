import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SponserCommentComponent } from './sponser-comment.component';

describe('SponserCommentComponent', () => {
  let component: SponserCommentComponent;
  let fixture: ComponentFixture<SponserCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponserCommentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SponserCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

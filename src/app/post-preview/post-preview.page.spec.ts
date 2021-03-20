import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostPreviewPage } from './post-preview.page';

describe('PostPreviewPage', () => {
  let component: PostPreviewPage;
  let fixture: ComponentFixture<PostPreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

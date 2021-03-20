import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryPostPage } from './category-post.page';

describe('CategoryPostPage', () => {
  let component: CategoryPostPage;
  let fixture: ComponentFixture<CategoryPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

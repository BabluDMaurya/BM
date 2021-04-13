import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryPagePage } from './category-page.page';

describe('CategoryPagePage', () => {
  let component: CategoryPagePage;
  let fixture: ComponentFixture<CategoryPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

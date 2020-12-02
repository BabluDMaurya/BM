import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutritionListPage } from './nutrition-list.page';

describe('NutritionListPage', () => {
  let component: NutritionListPage;
  let fixture: ComponentFixture<NutritionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

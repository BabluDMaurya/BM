import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgramNutritionDetailModalComponent } from './program-nutrition-detail-modal.component';

describe('ProgramNutritionDetailModalComponent', () => {
  let component: ProgramNutritionDetailModalComponent;
  let fixture: ComponentFixture<ProgramNutritionDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramNutritionDetailModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramNutritionDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

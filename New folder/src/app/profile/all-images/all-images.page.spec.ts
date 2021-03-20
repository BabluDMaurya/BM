import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllImagesPage } from './all-images.page';

describe('AllImagesPage', () => {
  let component: AllImagesPage;
  let fixture: ComponentFixture<AllImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllImagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

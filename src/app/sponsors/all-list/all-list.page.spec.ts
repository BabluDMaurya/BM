import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllListPage } from './all-list.page';

describe('AllListPage', () => {
  let component: AllListPage;
  let fixture: ComponentFixture<AllListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

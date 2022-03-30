import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewScheduleProgramPage } from './new-schedule-program.page';

describe('NewScheduleProgramPage', () => {
  let component: NewScheduleProgramPage;
  let fixture: ComponentFixture<NewScheduleProgramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewScheduleProgramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewScheduleProgramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

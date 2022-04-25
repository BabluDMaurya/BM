import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewProgramViewPage } from './new-program-view.page';

describe('NewProgramViewPage', () => {
  let component: NewProgramViewPage;
  let fixture: ComponentFixture<NewProgramViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProgramViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewProgramViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

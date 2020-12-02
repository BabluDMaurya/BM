import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditProgramPage } from './edit-program.page';

describe('EditProgramPage', () => {
  let component: EditProgramPage;
  let fixture: ComponentFixture<EditProgramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProgramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProgramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

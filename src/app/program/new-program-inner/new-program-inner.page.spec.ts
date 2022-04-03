import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewProgramInnerPage } from './new-program-inner.page';

describe('NewProgramInnerPage', () => {
  let component: NewProgramInnerPage;
  let fixture: ComponentFixture<NewProgramInnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProgramInnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewProgramInnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

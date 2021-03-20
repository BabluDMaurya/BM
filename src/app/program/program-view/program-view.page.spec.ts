import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgramViewPage } from './program-view.page';

describe('ProgramViewPage', () => {
  let component: ProgramViewPage;
  let fixture: ComponentFixture<ProgramViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

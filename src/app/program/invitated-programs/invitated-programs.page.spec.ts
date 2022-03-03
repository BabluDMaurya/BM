import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvitatedProgramsPage } from './invitated-programs.page';

describe('InvitatedProgramsPage', () => {
  let component: InvitatedProgramsPage;
  let fixture: ComponentFixture<InvitatedProgramsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitatedProgramsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvitatedProgramsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

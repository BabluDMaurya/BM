import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermPage } from './term.page';

describe('TermPage', () => {
  let component: TermPage;
  let fixture: ComponentFixture<TermPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

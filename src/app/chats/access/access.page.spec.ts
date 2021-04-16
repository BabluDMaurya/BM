import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccessPage } from './access.page';

describe('AccessPage', () => {
  let component: AccessPage;
  let fixture: ComponentFixture<AccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

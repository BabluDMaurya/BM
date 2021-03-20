import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactAdminPage } from './contact-admin.page';

describe('ContactAdminPage', () => {
  let component: ContactAdminPage;
  let fixture: ComponentFixture<ContactAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

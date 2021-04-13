import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPrivatePage } from './add-private.page';

describe('AddPrivatePage', () => {
  let component: AddPrivatePage;
  let fixture: ComponentFixture<AddPrivatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrivatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPrivatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

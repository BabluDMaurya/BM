import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVideoPage } from './add-video.page';

describe('AddVideoPage', () => {
  let component: AddVideoPage;
  let fixture: ComponentFixture<AddVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

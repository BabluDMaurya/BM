import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShareModalComponent } from './share-modal.component';

describe('ShareModalComponent', () => {
  let component: ShareModalComponent;
  let fixture: ComponentFixture<ShareModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

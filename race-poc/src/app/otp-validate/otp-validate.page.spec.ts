import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtpValidatePage } from './otp-validate.page';

describe('OtpValidatePage', () => {
  let component: OtpValidatePage;
  let fixture: ComponentFixture<OtpValidatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpValidatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtpValidatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

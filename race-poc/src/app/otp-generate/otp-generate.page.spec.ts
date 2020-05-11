import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtpGeneratePage } from './otp-generate.page';

describe('OtpGeneratePage', () => {
  let component: OtpGeneratePage;
  let fixture: ComponentFixture<OtpGeneratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpGeneratePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtpGeneratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

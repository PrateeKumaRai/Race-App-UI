import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizdashPage } from './quizdash.page';

describe('QuizdashPage', () => {
  let component: QuizdashPage;
  let fixture: ComponentFixture<QuizdashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizdashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizdashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

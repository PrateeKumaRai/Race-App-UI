import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WelcometoappPage } from './welcometoapp.page';

describe('WelcometoappPage', () => {
  let component: WelcometoappPage;
  let fixture: ComponentFixture<WelcometoappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcometoappPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcometoappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

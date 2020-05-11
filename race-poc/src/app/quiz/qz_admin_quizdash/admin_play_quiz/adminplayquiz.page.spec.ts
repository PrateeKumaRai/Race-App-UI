import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminPlayquizPage } from './adminplayquiz.page';

describe('AdminPlayquizPage', () => {
  let component: AdminPlayquizPage;
  let fixture: ComponentFixture<AdminPlayquizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlayquizPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPlayquizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

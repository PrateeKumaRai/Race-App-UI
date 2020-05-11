import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddquestionPage } from './addquestion.page';

describe('AddquestionPage', () => {
  let component: AddquestionPage;
  let fixture: ComponentFixture<AddquestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddquestionPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddquestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayquizPage } from './playquiz.page';

describe('PlayerPage', () => {
  let component: PlayquizPage;
  let fixture: ComponentFixture<PlayquizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayquizPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayquizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

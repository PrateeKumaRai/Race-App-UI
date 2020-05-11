import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminShowResultPage } from './adminshowresult.page';

describe('AdminShowResultPage', () => {
  let component: AdminShowResultPage;
  let fixture: ComponentFixture<AdminShowResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminShowResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminShowResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

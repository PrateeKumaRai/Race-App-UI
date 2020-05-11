import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterDataPage } from './filter-data.page';

describe('FilterDataPage', () => {
  let component: FilterDataPage;
  let fixture: ComponentFixture<FilterDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

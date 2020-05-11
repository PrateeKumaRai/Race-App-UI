import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetEmployeePage } from './get-employee.page';

describe('GetEmployeePage', () => {
  let component: GetEmployeePage;
  let fixture: ComponentFixture<GetEmployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmployeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

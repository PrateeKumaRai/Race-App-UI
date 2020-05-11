import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAssetPage } from './add-asset.page';

describe('AddAssetPage', () => {
  let component: AddAssetPage;
  let fixture: ComponentFixture<AddAssetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapAssetPage } from './cap-asset.page';

describe('CapAssetPage', () => {
  let component: CapAssetPage;
  let fixture: ComponentFixture<CapAssetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapAssetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

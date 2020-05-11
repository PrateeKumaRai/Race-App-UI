import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssetResPage } from './asset-res.page';

describe('AssetResPage', () => {
  let component: AssetResPage;
  let fixture: ComponentFixture<AssetResPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetResPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssetResPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

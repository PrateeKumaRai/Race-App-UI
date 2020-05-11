import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GetAllAssetPage } from './get-all-asset.page';





describe('GetAllAssetPage', () => {
  let component: GetAllAssetPage;
  let fixture: ComponentFixture<GetAllAssetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllAssetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetAllAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

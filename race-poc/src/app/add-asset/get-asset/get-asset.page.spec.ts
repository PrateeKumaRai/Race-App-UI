import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GetAssetPage } from './get-asset.page';



describe('GetAssetPage', () => {
  let component: GetAssetPage;
  let fixture: ComponentFixture<GetAssetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAssetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

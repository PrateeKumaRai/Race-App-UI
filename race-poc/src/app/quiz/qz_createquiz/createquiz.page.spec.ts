import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CreatequizPage } from './createquiz.page';



describe('CreatequizPage', () => {
  let component: CreatequizPage;
  let fixture: ComponentFixture<CreatequizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatequizPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatequizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

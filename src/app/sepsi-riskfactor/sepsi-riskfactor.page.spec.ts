import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SepsiRiskfactorPage } from './sepsi-riskfactor.page';

describe('SepsiRiskfactorPage', () => {
  let component: SepsiRiskfactorPage;
  let fixture: ComponentFixture<SepsiRiskfactorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SepsiRiskfactorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SepsiRiskfactorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

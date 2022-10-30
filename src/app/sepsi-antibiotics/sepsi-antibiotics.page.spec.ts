import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SepsiAntibioticsPage } from './sepsi-antibiotics.page';

describe('SepsiAntibioticsPage', () => {
  let component: SepsiAntibioticsPage;
  let fixture: ComponentFixture<SepsiAntibioticsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SepsiAntibioticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SepsiAntibioticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

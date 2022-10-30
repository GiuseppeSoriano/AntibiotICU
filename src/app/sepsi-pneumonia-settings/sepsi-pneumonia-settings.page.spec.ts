import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SepsiPneumoniaSettingsPage } from './sepsi-pneumonia-settings.page';

describe('SepsiPneumoniaSettingsPage', () => {
  let component: SepsiPneumoniaSettingsPage;
  let fixture: ComponentFixture<SepsiPneumoniaSettingsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SepsiPneumoniaSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SepsiPneumoniaSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

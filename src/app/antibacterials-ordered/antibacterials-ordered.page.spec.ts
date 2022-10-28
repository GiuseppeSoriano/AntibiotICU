import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntibacterialsOrderedPage } from './antibacterials-ordered.page';

describe('AntibacterialsOrderedPage', () => {
  let component: AntibacterialsOrderedPage;
  let fixture: ComponentFixture<AntibacterialsOrderedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AntibacterialsOrderedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntibacterialsOrderedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

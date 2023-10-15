import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BacterialsOrderedPage } from './bacterials-ordered.page';

describe('BacterialsOrderedPage', () => {
  let component: BacterialsOrderedPage;
  let fixture: ComponentFixture<BacterialsOrderedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BacterialsOrderedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BacterialsOrderedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

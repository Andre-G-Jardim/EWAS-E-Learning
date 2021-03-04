import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalOneboardingPage } from './modal-oneboarding.page';

describe('ModalOneboardingPage', () => {
  let component: ModalOneboardingPage;
  let fixture: ComponentFixture<ModalOneboardingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOneboardingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalOneboardingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanalduvidasPage } from './canalduvidas.page';

describe('CanalduvidasPage', () => {
  let component: CanalduvidasPage;
  let fixture: ComponentFixture<CanalduvidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanalduvidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanalduvidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetodosPage } from './metodos.page';

describe('MetodosPage', () => {
  let component: MetodosPage;
  let fixture: ComponentFixture<MetodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

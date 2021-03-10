import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetodosConteudoPage } from './metodos-conteudo.page';

describe('MetodosConteudoPage', () => {
  let component: MetodosConteudoPage;
  let fixture: ComponentFixture<MetodosConteudoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodosConteudoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetodosConteudoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificacoesPage } from './notificacoes.page';

describe('NotificacoesPage', () => {
  let component: NotificacoesPage;
  let fixture: ComponentFixture<NotificacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

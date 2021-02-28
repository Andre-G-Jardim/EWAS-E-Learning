import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificacaoPage } from './verificacao.page';

describe('VerificacaoPage', () => {
  let component: VerificacaoPage;
  let fixture: ComponentFixture<VerificacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

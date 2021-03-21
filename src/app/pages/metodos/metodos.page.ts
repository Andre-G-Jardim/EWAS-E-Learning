import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Metodo } from 'app/interface/metodo';
import { Notificacao } from 'app/interface/notificacao'
import { Subscription } from 'rxjs';
import { MetodosConteudoService } from '../metodos-conteudo/metodos-conteudo.service';
import { NotificacoesService } from '../notificacoes/notificacoes.service';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.page.html',
  styleUrls: ['./metodos.page.scss'],
})
export class MetodosPage implements OnInit {
  public metodos = new Array<Metodo>();
  private metodosSubscription: Subscription;

  public notificacoes = new Array<Notificacao>();
  private notificacaoSubscription: Subscription;
  private index = 0;

  constructor(
    private metodosService: MetodosConteudoService,
    private notificacaoService: NotificacoesService, 
    private toastCtrl: ToastController) 
    {
    this.metodosSubscription = this.metodosService.getMetodos().subscribe(data => {
      this.metodos = data;
    });
    this.notificacaoSubscription = this.notificacaoService.getNotificacao().subscribe(data =>{
      this.notificacoes = data;
    })
  }

  ionViewDidEnter() {
    this.index = this.randomInt(0, (this.notificacoes.length-1))
    this.toastHome();
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.metodosSubscription.unsubscribe();
  }

  async toastHome(){

    try {
      this.toastCtrl.dismiss();
    } catch(e) {
      console.error(e);
    }
    let toast = await this.toastCtrl.create({ 
      animated: true,
      header: this.notificacoes[this.index].titulo,
      message: this.notificacoes[this.index].texto,
      cssClass: 'toast-Custon-Class round',
      mode: 'ios',
      duration: 5000,
      buttons: [{icon:'notifications'}]
      
    });

    toast.present();
  }

  public randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

}

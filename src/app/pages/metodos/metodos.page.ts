import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Metodo } from 'app/interface/metodo';
import { Subscription } from 'rxjs';
import { MetodosConteudoService } from '../metodos-conteudo/metodos-conteudo.service';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.page.html',
  styleUrls: ['./metodos.page.scss'],
})
export class MetodosPage implements OnInit {
  public metodos = new Array<Metodo>();
  private metodosSubscription: Subscription;
  private headerToast : string[] = [
    'Você sabe qual a efetividade da pílula oral combinada?', 
    'Está com alguma dúvida?', 
    'Você sabe a diferença da Minipílula para a Oral Combinada?',
    'Já ouviu falar do implante hormonal?', 
    'Você sabe quando o anticomcepcional injetável não é indicado?',
    'Você sabe o tempo de duração de um DIU?'
    ];
    private messageToast : string[] = [
    'Confira na aba Materias', 
    'Entre em contato conosco pelo nosso canal de dúvidas!',
    'Confira nos Métodos contraceptivos',
    'Ele é um dos mais efetivos',
    'Confira nos Materiais de métodos contraceptivos',
    'Confira na aba DIU nos métodos contraceptivos'
    ];
    private index = 0;

  constructor(
    private metodosService: MetodosConteudoService, 
    private toastCtrl: ToastController) {
    this.metodosSubscription = this.metodosService.getMetodos().subscribe(data => {
      this.metodos = data;
    })
  }

  ionViewDidEnter() {
    this.index = this.randomInt(0, (this.headerToast.length-1))
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
    } catch(e) {}
    let toast = await this.toastCtrl.create({ 
      animated: true,
      header: this.headerToast[this.index],
      message: this.messageToast[this.index],
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

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalOneboardingPage } from '../modal-oneboarding/modal-oneboarding.page';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-verificacao',
  templateUrl: './verificacao.page.html',
  styleUrls: ['./verificacao.page.scss'],
})
export class VerificacaoPage implements OnInit {

  constructor(private modalCtrl: ModalController,
    private menu: MenuController) {
      this.menu.swipeGesture(false);
    }
  

  ionViewDidEnter() {
    this.oneboarding();
   }

  ngOnInit() {
  }

  async oneboarding(){
    const modal = await this.modalCtrl.create({
      component : ModalOneboardingPage
    });

    modal.present();
  }
}

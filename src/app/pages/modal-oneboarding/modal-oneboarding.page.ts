import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-oneboarding',
  templateUrl: './modal-oneboarding.page.html',
  styleUrls: ['./modal-oneboarding.page.scss'],
})
export class ModalOneboardingPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { 
  }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }
}

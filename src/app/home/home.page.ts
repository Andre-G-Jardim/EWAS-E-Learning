import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private navCtrl : NavController) {}

  ngOnInit(){}

  page_login(){
    this.navCtrl.navigateForward('login');
  }

  page_cadastro(){
    this.navCtrl.navigateForward('cadastro');
  }

}

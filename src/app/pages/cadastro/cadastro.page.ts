import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  page_login(){
    this.navCtrl.navigateForward('login');
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from 'app/interface/user';
import { __await } from 'tslib';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  private loading: any;
  public usuarioCadastro: User = {};

  constructor(private navCtrl: NavController,
    private loginService: LoginService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  page_login(){
    this.navCtrl.navigateForward('login');
  }

  async onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    await this.presentLoading();
    try{
      await this.loginService.cadastro(this.usuarioCadastro);
    } catch(error ){
      let message: string;
      switch(error.code){
        case 'auth/email-already-in-use':
          message = "O endereço de e-mail já está em uso.";
          break;
        case 'auth/invalid-email':
          message = "Email inválido!";
          break;
      }
      this.presentToast(message);
    } finally{
      this.loading.dismiss();
    }
  }

  async cadastro() {

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Por favor, aguarde...'});
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}

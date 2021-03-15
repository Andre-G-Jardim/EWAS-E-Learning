import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'app/interface/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loading: any;
  public usuarioLogin: User = {};

  constructor(private loginService: LoginService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  redefinirSenha(){
    this.router.navigateByUrl("redefinir-senha");
  }

  async onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    await this.presentLoading();
    try{
      await this.loginService.login(this.usuarioLogin);
    } catch(error ){
      console.error(error);
      let message: string;
      switch(error.code){
        case 'auth/user-not-found':
          message = "Usuário não encontrado";
          break;
        case 'auth/wrong-password':
          message = "Senha incorreta! Por favor, tente novamente.";
          break;
      }
      this.presentToast(message);
    } finally{
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Autenticando...'});
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 4000
    });
    toast.present();
  }


}


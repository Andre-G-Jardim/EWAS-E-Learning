import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'app/interface/user';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
})
export class RedefinirSenhaPage implements OnInit {
  private loading: any;
  public usuario: User = {};

  constructor(private loginService: LoginService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router) { }

  ngOnInit() {
  }

  async onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    await this.presentLoading();
    try{
      await this.loginService.redefinirSenha(this.usuario);
      await this.presentToast("Link enviado para o seu email");
      this.router.navigateByUrl("login");
    } catch(error){
      console.error(error);
      let message: string;
      switch(error.code){
        case 'auth/invalid-email':
          message = "Email inválido!";
          break;
        case 'auth/user-not-found':
          message = "Usuário não encontrado! Verifique se você está cadastrado."
          break;
        case 'auth/too-many-requests':
          message = "Ops... notamos uma atividade suspeita, muitos pedidos foram feitos. Tente repetir mais tarde."
      }
      this.presentToast(message);
    } finally{
      this.loading.dismiss();
    }
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
      duration: 3000
    });
    toast.present();
  }

}

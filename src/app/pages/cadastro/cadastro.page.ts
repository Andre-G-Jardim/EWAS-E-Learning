import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
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
    private toastCtrl: ToastController,
    private afs: AngularFirestore) { }

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
      const novoUsuario = await this.loginService.cadastro(this.usuarioCadastro);
      const novoUsuarioObject = Object.assign({}, this.usuarioCadastro);

      delete novoUsuarioObject.email;
      delete novoUsuarioObject.senha;

      await this.afs.collection('Usuarios').doc(novoUsuario.user.uid).set(novoUsuarioObject);
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

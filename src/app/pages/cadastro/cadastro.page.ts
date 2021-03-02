import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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

  public fGroup: FormGroup;


  constructor(private navCtrl: NavController,
    private loginService: LoginService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private afs: AngularFirestore,
    private fBuilder: FormBuilder) {
      this.fGroup = this.fBuilder.group({
        'nome': [null, Validators.compose([
          Validators.required

        ])],
        'email': [null, Validators.compose([
          Validators.required,
          Validators.pattern('^[A-Za-z0-9._%+-]+@procempa.com.br$')
        ])],
        'senha': [null, Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])]
      })
    }

  ngOnInit() {
  }

  page_login(){
    this.navCtrl.navigateForward('login');
  }

  async onSubmitForm(){
    await this.presentLoading();
    try{
      this.usuarioCadastro.nome = this.fGroup.get('nome').value;
      this.usuarioCadastro.email = this.fGroup.get('email').value;
      this.usuarioCadastro.senha = this.fGroup.get('senha').value;
      const novoUsuario = await this.loginService.cadastro(this.usuarioCadastro);
      const novoUsuarioObject = Object.assign({}, this.usuarioCadastro);

      delete novoUsuarioObject.email;
      delete novoUsuarioObject.senha;

      await this.afs.collection('Usuarios').doc(novoUsuario.user.uid).set(novoUsuarioObject);
      await novoUsuario.user.sendEmailVerification();
      this.fGroup.get('nome').setValue(null);
      this.fGroup.get('email').setValue(null);
      this.fGroup.get('senha').setValue(null);
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
      this.presentToast(error.message);
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

import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Videos } from 'app/interface/videos';
import { Notificacao } from 'app/interface/notificacao'
import { Subscription } from 'rxjs';
import { VideosTemaService } from '../videos-tema/videos-tema.service';
import { NotificacoesService } from '../notificacoes/notificacoes.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  public videos = new Array<Videos>();
  private videosSubscription: Subscription;

  public notificacoes = new Array<Notificacao>();
  private notificacaoSubscription: Subscription;
  private index = 0;


  constructor(
    private videoService: VideosTemaService,
    private notificacaoService: NotificacoesService,
    private toastCtrl: ToastController) {
    this.videosSubscription = this.videoService.getVideos().subscribe(data => {
      this.videos = data;
    });
    this.notificacaoSubscription = this.notificacaoService.getNotificacao().subscribe(data =>{
      this.notificacoes = data;
    });
  }

  ionViewDidEnter() {
    if (this.notificacoes != null){
      this.callToast()
    }
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.videosSubscription.unsubscribe();
  }

  async toastHome(){

    try {
      this.toastCtrl.dismiss();
    } catch(e) {}
    let toast = await this.toastCtrl.create({ 
      animated: true,
      header: this.notificacoes[this.index].titulo,
      message: this.notificacoes[this.index].texto,
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


  public callToast(){
    this.index = this.randomInt(0, (this.notificacoes.length-1))
    this.toastHome();
  }
}

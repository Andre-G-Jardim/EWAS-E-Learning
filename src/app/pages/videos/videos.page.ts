import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Videos } from 'app/interface/videos';
import { Subscription } from 'rxjs';
import { VideosTemaService } from '../videos-tema/videos-tema.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  public videos = new Array<Videos>();
  private videosSubscription: Subscription;
  private headerToast : string[] = [
    'Você sabe qual a efetividade da pílula oral combinada?', 
    'Está com alguma dúvida?', 
    'Você sabe a diferença da Minipílula para a Oral Combinada?',
    'Já ouviu falar do implante hormonal?', 
    'Você sabe quando o anticomcepcional injetável não é indicado?',
    'Você sabe o tempo de duração de um DIU?'
    ];
    private messageToast : string[] = [
    'Confira na aba Materiais', 
    'Entre em contato conosco pelo nosso canal de dúvidas!',
    'Confira nos Métodos contraceptivos',
    'Ele é um dos mais efetivos',
    'Confira nos Materiais de métodos contraceptivos',
    'Confira na aba DIU nos métodos contraceptivos'
    ];
    private index = 0;


  constructor(
    private videoService: VideosTemaService,
    private toastCtrl: ToastController) {
    this.videosSubscription = this.videoService.getVideos().subscribe(data => {
      this.videos = data;
    })
  }

  ionViewDidEnter() {
    this.index = this.randomInt(0, (this.headerToast.length-1))
    this.toastHome();
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
      header: this.headerToast[this.index],
      message: this.messageToast[this.index],
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

}

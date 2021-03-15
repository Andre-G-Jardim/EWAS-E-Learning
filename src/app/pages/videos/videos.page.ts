import { Component, OnInit } from '@angular/core';
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

  constructor(private videoService: VideosTemaService) {
    this.videosSubscription = this.videoService.getVideos().subscribe(data => {
      this.videos = data;
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.videosSubscription.unsubscribe();
  }

}

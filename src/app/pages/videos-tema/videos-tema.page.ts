import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videos } from 'app/interface/videos';
import { Subscription } from 'rxjs';
import { VideosTemaService } from './videos-tema.service';

@Component({
  selector: 'app-videos-tema',
  templateUrl: './videos-tema.page.html',
  styleUrls: ['./videos-tema.page.scss'],
})
export class VideosTemaPage implements OnInit {
  public video: Videos = {};
  private videoId: string = null;
  private videoSubscription: Subscription;

  constructor(private activeRoute: ActivatedRoute, private videoService: VideosTemaService) {
    this.videoId = activeRoute.snapshot.params['id'];
    if(this.videoId) this.loadVideos();
   }

  ngOnInit() {
  }

  loadVideos(){
    this.videoSubscription = this.videoService.getMetodo(this.videoId).subscribe(data => {
      this.video = data;
    });
  }

}

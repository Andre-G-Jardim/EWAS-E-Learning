import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core'

declare var google: any;

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage {
  map: any;

  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;


  constructor() { }

  ionViewDidEnter() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(-30.0277, -51.2287)
    const startOptions = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, startOptions)
  }

}

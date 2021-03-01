import { AfterViewInit, Component, Input, Renderer2 } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core'

import { AlertController } from '@ionic/angular';

import { Plugins, Capacitor } from '@capacitor/core'

import { Coordinates } from '../servicos/location.model'

//declare var google: any;

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements AfterViewInit {
  // map: any;

  @ViewChild('map', { read: ElementRef, static: false }) mapElementRef: ElementRef;
  @Input() center={lat: -30.0315623, lng: -51.220873} //coords ufcspa
  location: string;
  places: Array<any>;
  isLoading = false;

  constructor(
    private renderer: Renderer2,
    private alertCtrl: AlertController
  ) { }

  ngAfterViewInit() {
    this.locateUser();
  }

  private getGoogleMaps(): Promise<any> {
    const win = window as any;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAQv1v4rtu2UWvgV3L-YlRoyYF_NpMR554';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if (loadedGoogleModule && loadedGoogleModule.maps) {
          resolve(loadedGoogleModule.maps);
        } else {
          reject('Google maps SDK not available! Check code')
        }
      }
    })
  }

  private locateUser() {
    if (!Capacitor.isPluginAvailable('Geolocation')) {
      this.showErrorAlert();
      this.mapDefault();
      return;
    }
    this.isLoading=true;
    Plugins.Geolocation.getCurrentPosition()
    .then(geoPosition => {
     const coordinates: Coordinates = {
        lat_coord: geoPosition.coords.latitude, 
        lng_coord: geoPosition.coords.longitude
      };
      this.mapFromUserCoords(coordinates)
      this.isLoading=false;
    }).catch(err => {
      this.isLoading=false;
      this.showErrorAlert();
      this.mapDefault();
    })
  }

  private mapFromUserCoords(user_coords: Coordinates) {
    this.getGoogleMaps().then(googleMaps => {
      const mapEl = this.mapElementRef.nativeElement;
      const mapActual = new googleMaps.Map(mapEl, {
        center: {lat: user_coords.lat_coord, lng: user_coords.lng_coord},
        zoom: 16
      });
      googleMaps.event.addListenerOnce(mapActual, 'idle', () => {
        this.renderer.addClass(mapEl, 'visible');
      });
      const marker = new googleMaps.Marker({
        position: {lat: user_coords.lat_coord, lng: user_coords.lng_coord},
        map: mapActual,
        title: "Você"
      });
      marker.setMap(mapActual);
    }).catch(err => {
      console.log(err);
    })
  }

  private mapDefault(){
    this.getGoogleMaps().then(googleMaps => {
      const mapEl = this.mapElementRef.nativeElement;
      const mapActual = new googleMaps.Map(mapEl, {
        center: this.center,
        zoom: 16
      });
      googleMaps.event.addListenerOnce(mapActual, 'idle', () => {
        this.renderer.addClass(mapEl, 'visible');
      });
      const marker = new googleMaps.Marker({
        position: this.center,
        map: mapActual,
        title: "Você"
      });
      marker.setMap(mapActual);
    }).catch(err => {
      console.log(err);
    })
  }

  private showErrorAlert() {
    this.alertCtrl.create({
      header: 'Não foi possível obter a localização atual',
      message: 'Por favor, tente novamente',
      buttons: ['OK']
    }).then(alertEl => alertEl.present());
  }

  // ionViewDidEnter() {
  //   this.showMap();
  // }

  // showMap() {
  //   const location = new google.maps.LatLng(-30.0277, -51.2287)
  //   const startOptions = {
  //     center: location,
  //     zoom: 15,
  //     disableDefaultUI: true
  //   }
  //   this.map = new google.maps.Map(this.mapRef.nativeElement, startOptions)
  // }



  getLocation() {
    alert(this.location);
    // if (this.location === "farmacia") {
    //   this.getPharmacies(Map.LatLng).then((results: Array<any>) => {
    //     this.places = results;
    //     for ()
    //   })
    // }
  }

  getPharmacies(latLng) {

  }


}
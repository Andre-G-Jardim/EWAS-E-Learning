import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core'

// declare var google: any;

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements AfterViewInit {
  // map: any;

  @ViewChild('map', { read: ElementRef, static: false }) mapElementRef: ElementRef;
  location: string;
  places: Array<any>;


  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.getGoogleMaps().then(googleMaps => {
      const mapEl = this.mapElementRef.nativeElement;
      const map = new googleMaps.Map(mapEl, {
        //center: { lat: -30.0277, lng: -51.2287}, coords poa
        center: { lat: -30.0313503, lng: -51.2212936 }, //coords ufcspa
        zoom: 16
      });
      googleMaps.event.addListenerOnce(map, 'idle', () => {
        this.renderer.addClass(mapEl, 'visible');
      });


    }).catch(err => {
      console.log(err);
    })
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
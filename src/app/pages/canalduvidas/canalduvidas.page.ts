import { Component, Inject,  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-canalduvidas',
  templateUrl: './canalduvidas.page.html',
  styleUrls: ['./canalduvidas.page.scss'],
})
export class CanalduvidasPage  {

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ionViewWillEnter(){

  }


  public sendEmail(event: Event){
    event.preventDefault();
    emailjs.sendForm(environment.emailjs.serviceID, 
    environment.emailjs.templateID, 
    event.target as HTMLFormElement, 
    environment.emailjs.userID).then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      this._document.defaultView.location.reload()
    }, (error) => {
      console.log(error.text);
    });
  }

  refreshPage(){
    this._document.defaultView.location.reload();
  }
}

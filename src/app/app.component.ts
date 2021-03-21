import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './interface/user';
import { LoginService } from './pages/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public usuario: User = {};
  private userId: string = null;
  deferredPrompt;

  constructor(private loginService: LoginService, private afa: AngularFireAuth) {}

  ngOnInit(){
    this.loadUsuario();
  }

  async logout(){
    try{
      await this.loginService.logout();

    } catch(error){
      console.error(error);

    }
  }

  loadUsuario(){
    this.afa.onAuthStateChanged((user) =>
    {
      this.userId = user.uid;
      this.loginService.getIdUser(this.userId).subscribe((data) => {
         this.usuario = data;
         this.usuario.email = user.email;
      })
    })
  }

  ionViewWillEnter(){
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later on the button event.
      this.deferredPrompt = e;
    });

    //button click event to show the promt

    window.addEventListener('appinstalled', (event) => {
     alert('installed');
    });


    if (window.matchMedia('(display-mode: standalone)').matches) {
      alert('display-mode is standalone');
    }
  }

  abrirInstalacao(){
    debugger
    // hide our user interface that shows our button
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          alert('User accepted the prompt');
        } else {
          alert('User dismissed the prompt');
        }
        this.deferredPrompt = null;
      });
  }
}

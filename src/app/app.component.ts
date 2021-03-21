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
}

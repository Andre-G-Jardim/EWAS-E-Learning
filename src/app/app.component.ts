import { Component } from '@angular/core';
import { LoginService } from './pages/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private loginService: LoginService) {}

  async logout(){
    try{
      await this.loginService.logout();

    } catch(error){
      console.error(error);

    }
  }
}

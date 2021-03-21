import { Component, OnInit } from '@angular/core';
import { Notificacao } from 'app/interface/notificacao';
import { Subscription } from 'rxjs';
import { NotificacoesService } from './notificacoes.service'

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage implements OnInit {
  public notificacoes = new Array<Notificacao>();
  private notificacaoSubscription: Subscription;

  constructor( 
    private notificacaoService: NotificacoesService) 
    {
    this.notificacaoSubscription = this.notificacaoService.getNotificacao().subscribe(data =>{
      this.notificacoes = data;
    })
  }  

  ngOnInit() {
  }

  ngOnDestroy(){
    this.notificacaoSubscription.unsubscribe();
  }

}

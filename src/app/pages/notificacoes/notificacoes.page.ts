import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Notificacao } from 'app/interface/notificacao';
import { Subscription } from 'rxjs';
import { NotificacoesService } from './notificacoes.service'

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage implements OnInit {
  public notificacao: Notificacao = {};
  private notificacaoId: string = null;
  private notificacaoSubscription: Subscription;

  constructor(
    private activateRoute: ActivatedRoute, 
    private notificacaoService: NotificacoesService) 
    {
    this.notificacaoId = activateRoute.snapshot.params['id'];
    if(this.notificacaoId) this.loadNotificacao();
   }

  ngOnInit() {
  }

  loadNotificacao(){
    this.notificacaoSubscription = this.notificacaoService.getMetodo(this.notificacaoId).subscribe(data => {
      this.notificacao = data;
    })
  }

}

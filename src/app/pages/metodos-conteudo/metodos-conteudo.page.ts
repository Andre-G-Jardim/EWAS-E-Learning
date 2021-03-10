import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Metodo } from 'app/interface/metodo';
import { Subscription } from 'rxjs';
import { MetodosConteudoService } from './metodos-conteudo.service';

@Component({
  selector: 'app-metodos-conteudo',
  templateUrl: './metodos-conteudo.page.html',
  styleUrls: ['./metodos-conteudo.page.scss'],
})
export class MetodosConteudoPage implements OnInit {
  public metodo: Metodo = {};
  private metodoId: string = null;
  private metodoSubscription: Subscription;

  constructor(private activeRoute: ActivatedRoute, private metodoService: MetodosConteudoService) {
    this.metodoId = activeRoute.snapshot.params['id'];
    if(this.metodoId) this.loadMetodo();
   }

  ngOnInit() {
  }

  loadMetodo(){
    this.metodoSubscription = this.metodoService.getMetodo(this.metodoId).subscribe(data => {
      this.metodo = data;
    });
  }

}

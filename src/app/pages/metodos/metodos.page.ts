import { Component, OnInit } from '@angular/core';
import { Metodo } from 'app/interface/metodo';
import { Subscription } from 'rxjs';
import { MetodosConteudoService } from '../metodos-conteudo/metodos-conteudo.service';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.page.html',
  styleUrls: ['./metodos.page.scss'],
})
export class MetodosPage implements OnInit {
  public metodos = new Array<Metodo>();
  private metodosSubscription: Subscription;

  constructor(private metodosService: MetodosConteudoService) {
    this.metodosSubscription = this.metodosService.getMetodos().subscribe(data => {
      this.metodos = data;
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.metodosSubscription.unsubscribe();
  }


}

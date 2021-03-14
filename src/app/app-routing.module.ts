import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/login/auth.guard';
import { LoginGuard } from './pages/login/login.guard';
import { VerifyGuard } from './pages/login/verify.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./pages/notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'canalduvidas',
    loadChildren: () => import('./pages/canalduvidas/canalduvidas.module').then( m => m.CanalduvidasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'servicos',
    loadChildren: () => import('./pages/servicos/servicos.module').then( m => m.ServicosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'verificacao',
    loadChildren: () => import('./pages/verificacao/verificacao.module').then( m => m.VerificacaoPageModule),
    canActivate: [VerifyGuard]
  },
  {
    path: 'modal-oneboarding',
    loadChildren: () => import('./pages/modal-oneboarding/modal-oneboarding.module').then( m => m.ModalOneboardingPageModule)
  },
  {
    path: 'metodos',
    loadChildren: () => import('./pages/metodos/metodos.module').then( m => m.MetodosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'metodos-conteudo',
    loadChildren: () => import('./pages/metodos-conteudo/metodos-conteudo.module').then( m => m.MetodosConteudoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'metodos-conteudo/:id',
    loadChildren: () => import('./pages/metodos-conteudo/metodos-conteudo.module').then( m => m.MetodosConteudoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'redefinir-senha',
    loadChildren: () => import('./pages/redefinir-senha/redefinir-senha.module').then( m => m.RedefinirSenhaPageModule),
    canActivate: [LoginGuard]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

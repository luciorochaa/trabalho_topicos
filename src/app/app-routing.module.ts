import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'pessoas',
    loadChildren: () => import('./pessoa/pessoa.module').then(p => p.PessoaModule)
  },

  {
    path: 'grupos',
    loadChildren: () => import('./grupo/grupo.module').then(p => p.GrupoModule)
  },

  {
    path: 'recursos',
    loadChildren: () => import('./recurso/recurso.module').then(p => p.RecursoModule)
  },

  {
    path: 'logins',
    loadChildren: () => import('./login/login.module').then(p => p.LoginModule)
  },
  {
    path: 'anotacoes',
    loadChildren: () => import('./anotacao/anotacao.module').then(p => p.AnotacaoModule)
  },
  {
    path: 'perfilrecurso',
    loadChildren: () => import('./perfil-recurso/perfil-recurso.module').then(p => p.PerfilRecursoModule)
  },
  {
    path: 'perfis',
    loadChildren: () => import('./perfil/perfil.module').then(p=>p.PerfilModule)
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

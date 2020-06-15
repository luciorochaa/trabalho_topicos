import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {    path: 'pessoas',
    loadChildren: () => import('./pessoa/pessoa.module').then(p=>p.PessoaModule)},

{    path: 'grupos',
    loadChildren: () => import('./grupo/grupo.module').then(p=>p.GrupoModule)  },

  {    path: 'recursos',
    loadChildren: () => import('./recurso/recurso.module').then(p=>p.RecursoModule) }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

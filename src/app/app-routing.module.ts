import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  { path: 'biblioteca', loadChildren: () => import('./biblioteca/biblioteca.module').then(m => m.BibliotecaModule) },
  { path: 'doacao', loadChildren: () => import('./doacao/doacao.module').then(m => m.DoacaoModule) }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

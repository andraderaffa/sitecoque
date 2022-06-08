import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoacaoComponent } from './doacao.component';

const routes: Routes = [{ path: '', component: DoacaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoacaoRoutingModule { }

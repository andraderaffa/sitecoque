import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoacaoRoutingModule } from './doacao-routing.module';
import { DoacaoComponent } from './doacao.component';


@NgModule({
  declarations: [
    DoacaoComponent
  ],
  imports: [
    CommonModule,
    DoacaoRoutingModule
  ]
})
export class DoacaoModule { }

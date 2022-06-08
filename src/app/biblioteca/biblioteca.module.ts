import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaComponent } from './biblioteca.component';


@NgModule({
  declarations: [
    BibliotecaComponent
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }

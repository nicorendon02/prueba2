import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { CalculadoraComponent } from './calculadora/calculadora.component';


@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule
  ],
  providers: [],
  bootstrap: [CalculadoraComponent]
})
export class PruebaModule { }

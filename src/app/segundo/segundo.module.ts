import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenorComponent } from './menor/menor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MenorComponent ],
  exports: [ MenorComponent ]
})
export class SegundoModule { }

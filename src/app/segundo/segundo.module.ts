import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MenorComponent } from './menor/menor.component';
import { MedioComponent } from './medio/medio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ MenorComponent, MedioComponent ],
  exports: [ MenorComponent, MedioComponent ]
})
export class SegundoModule { }

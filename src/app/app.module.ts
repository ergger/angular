import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SegundoModule } from './segundo/segundo.module';

import { AppComponent } from './app.component';
import { MayorComponent } from './mayor/mayor.component';
import { MenorComponent } from './segundo/menor/menor.component';

@NgModule({
  declarations: [
    AppComponent,
    MayorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SegundoModule
  ],
  providers: [],
  bootstrap: [AppComponent,MayorComponent,MenorComponent]
})
export class AppModule { }

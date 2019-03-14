import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medio',
  templateUrl: './medio.component.html',
  styleUrls: ['./medio.component.css']
})
export class MedioComponent implements OnInit {
   test = 16;
   lado = 3;
   ruta = 'https://www.festisite.com/static/partylogo/img/logos/nasa.png';
   deshabilitado = true;
  constructor() { }

  ngOnInit() {
  }
  cambiaLado(valor) {
    this.lado = valor;
  }

}

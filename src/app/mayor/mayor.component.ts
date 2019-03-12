import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor',
  templateUrl: './mayor.component.html',
  styleUrls: ['./mayor.component.css']
})
export class MayorComponent implements OnInit {
  dato = "Texto aleatorio para rellenar el componente";
  constructor() { }

  ngOnInit() {
	  console.log('Inicializando componente mayor');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menor',
  templateUrl: './menor.component.html',
  styleUrls: ['./menor.component.css']
})
export class MenorComponent implements OnInit {
    arreglo = [{codigo: 3, contenido: '� Tienes Mascotas?'},
    {codigo: 16, contenido: '� Te gustan los video juegos?'},
    {codigo: 23, contenido: '� quieres un mundo mejor?'}];
 
    poligono = {
        nombre: 'cuadrado',
        puntos: [{x:10,y:5},{x:15,y:5},{x:15,y:10},{x:10,y:10}]
    }
  constructor() { }

  ngOnInit() {
  }

}

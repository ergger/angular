import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor',
  templateUrl: './mayor.component.html',
  styleUrls: ['./mayor.component.css']
})
export class MayorComponent implements OnInit {
    titulo = 'Trabajo con Clases';
    dato = 'Cuando Ruthenford bombardeo rayos gama a una lamina de oro descubrio el modelo atomico';
    titulosPrincipales = 'titulo';
    cambiaEstilo() {
        if(this.titulosPrincipales == 'titulo'){
            this.titulosPrincipales = 'parrafos';
        }else{
            this.titulosPrincipales = 'titulo';
        }
    }
    constructor() { }
    ngOnInit() {
        console.log('Inicializando componente mayor');
    }

}

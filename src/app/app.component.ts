import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //etiqueta del selector principal
  templateUrl: './app.component.html', //Ruta donde está el archivo 
  styleUrls: ['./app.component.css'],  //Rota donde está el CSS

 

})

//se colocan las propiedades para poder acceder a ellas
export class AppComponent {
  //se suele indicar el tipo
  title  : string = 'bases'

}

//import desde angular
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';



@NgModule({
    declarations:[  
        ContadorComponent 
    ],

    exports: [
        ContadorComponent
    ],

    imports: [          //Módulos
    ]     
})


export class ContadorModule{}



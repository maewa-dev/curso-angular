//import desde angular
import { CommonModule } from '@angular/common';     //importa directivas personalizadas de angular ngIf/ngFor
import { NgModule } from '@angular/core';


//import desde componentes creados
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
//TODO vídeo 47 módulos.


@NgModule({
    declarations:[  //los componentes 
        HeroeComponent,
        ListadoComponent
    ],

    exports: [          //que elementos quiero que sean visibles fuera de este módulo
        ListadoComponent
    ],

    imports: [          //Módulos
        CommonModule,
    ]     
})

export class HeroesModule {}
//importaciones de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//importaciones de terceros

//importaciones de componentes que nosotros hemos creado
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [ 
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }

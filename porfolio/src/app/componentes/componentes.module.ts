import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    NavbarComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent,EncabezadoComponent,AcercaDeComponent,EducacionComponent,SkillsComponent]
})
export class ComponentesModule { }

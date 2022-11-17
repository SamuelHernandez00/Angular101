import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { MateriasComponent } from './components/materias/materias.component';
import { MateriaComponent } from './components/materia/materia.component';
import { MateriasService } from './services/materias.service';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DirectivasComponent,
    MateriasComponent,
    MateriaComponent,
    NuevoUsuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    MateriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

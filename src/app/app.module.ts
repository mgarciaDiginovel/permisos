import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudPermisosComponent } from './solicitud-permisos/solicitud-permisos.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudPermisosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SolicitudPermisosComponent]
})
export class AppModule { }

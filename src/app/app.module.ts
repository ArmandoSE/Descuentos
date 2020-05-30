import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { VistaeComponent } from './components/vistae/vistae.component';
import {environment} from '../environments/environment';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    FormularioComponent,
    VistaeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

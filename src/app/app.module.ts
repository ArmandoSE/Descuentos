import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { app_routing } from './routes';

//servicios
import {ofertasService} from './services/ofertas.services';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/shared/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CaruselComponent } from './components/shared/carusel/carusel.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';


@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent, 
    LoginComponent, 
    UsuarioComponent, CaruselComponent, OfertasComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    ofertasService      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

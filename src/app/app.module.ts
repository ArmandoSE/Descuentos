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
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent, 
    LoginComponent,   
    OfertasComponent, 
    OfertaComponent, 
    AboutComponent
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

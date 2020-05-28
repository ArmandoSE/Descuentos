import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { OfertaComponent } from '../app/components/oferta/oferta.component';
import { AboutComponent } from '../app/components/about/about.component';
import { OfertasComponent } from '../app/components/ofertas/ofertas.component';    


export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'oferta/:id', component:OfertaComponent},
    {path:'acerca', component:AboutComponent},
    {path:'ofertas', component:OfertasComponent},
    {path: '**', pathMatch : 'full', redirectTo : 'ofertas'}
]

export const app_routing = RouterModule.forRoot(routes);
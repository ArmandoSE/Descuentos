import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import {UsuarioComponent} from '../app/components/usuario/usuario.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'usuario', component:UsuarioComponent}
]

export const app_routing = RouterModule.forRoot(routes);
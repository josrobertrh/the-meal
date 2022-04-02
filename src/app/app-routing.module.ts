import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ProfileComponent } from './profile/profile.component'
import { DetalleComponent } from './detalle/detalle.component'
import { MenuComponent } from './menu/menu.component'
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [{path:'',component:MenuComponent,component:ProfileComponent},{path:'login',component:LoginComponent},{path:'profile',component:ProfileComponent,
    canActivate:[AuthGuardService]},{path:'detalle/:id',component:DetalleComponent,
    canActivate:[AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

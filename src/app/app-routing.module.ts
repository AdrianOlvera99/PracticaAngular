import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: 'login', component: FormLoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  // Otras rutas aquí...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

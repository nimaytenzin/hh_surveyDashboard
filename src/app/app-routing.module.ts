import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteGuard } from './service/route.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},

  // {path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuard]},
  {path: 'dashboard/:id', component: DashboardComponent },
  {path: 'admin', component: AdminComponent },
  // {path: 'update-household/:id', component: UpdateHouseholdComponent, canActivate: [RouteGuard]},
  // {path: 'changepassword', component: ChangePasswordComponent, canActivate: [RouteGuard]},
  {path: '**', component: ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

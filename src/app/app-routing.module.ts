import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './activities/dashboardActivity/dashboard/dashboard.component';
import { LoginComponent } from './activities/loginActivity/login/login.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

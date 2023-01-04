import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'register', pathMatch: 'full', component: RegisterComponent},
  {path: 'dashboard', pathMatch: 'full', component: DashboardComponent},
  {path: 'accounts', pathMatch: 'full', component: AccountsComponent},
  {path: 'payments', pathMatch: 'full', component: PaymentComponent},
  {path: 'courses', pathMatch: 'full', component: CoursesComponent},
  {path: 'profile/:username', pathMatch: 'full', component: ProfileComponent},
  {path: 'settings', pathMatch: 'full', component: SettingsComponent},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

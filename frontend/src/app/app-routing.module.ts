import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { OverviewComponent } from './overview/overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// conditional routes like in https://stackoverflow.com/questions/34660263/angular2-conditional-routing
const routes: Routes = [
  { path: '', component: OverviewComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetencySetComponent } from './competency-set/competency-set.component';
import { SelfReviewComponent } from './self-review/self-review.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "competencyset", component: CompetencySetComponent, canActivate: [AuthGuard] },
  { path: "selfreview", component: SelfReviewComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
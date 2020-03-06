import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompetencySetComponent } from './competency-set/competency-set.component';
import { SelfReviewComponent } from './self-review/self-review.component';
import { AuthService } from './auth-service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { CompetencyService } from './competency-service';
import { SelfReviewItemComponent } from './self-review/self-review-item/self-review-item.component';
declare var $: any;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompetencySetComponent,
    SelfReviewComponent,
    LoginComponent,
    HomeComponent,
    SelfReviewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService, 
    AuthGuard, 
    CookieService, 
    CompetencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth-service';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("f") loginForm: NgForm;
  constructor(private cookieService: CookieService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    
  }

  onLogin() {
    this.authService.login(this.loginForm.form.value.userData.email);
    (this.route.queryParams.subscribe((params) => {
      console.log(params);
      if(params["redirectTo"]){
        this.router.navigate([params["redirectTo"]]);
      } else {
        this.router.navigate(["/"]);
      }
    }));
  }
}
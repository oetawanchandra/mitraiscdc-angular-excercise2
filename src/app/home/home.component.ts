import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.username = this.cookieService.get('mytoken');
  }
}

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class AuthService {
    
    constructor(private cookieService: CookieService) {

    }

    isAuthenticated(): Promise<boolean> {
        const promise = new Promise<boolean>((resolve,reject)=>{
            setTimeout(() => {
                const token = this.cookieService.get('mytoken');
                resolve(token !== null && token !== undefined && token !== "");
            }, 500);
        });

        return promise;
    }

    login(username: string): void {
        this.cookieService.set("mytoken", username);
    }

    logout(username: string): void {
        this.cookieService.delete("mytoken");
    }
}
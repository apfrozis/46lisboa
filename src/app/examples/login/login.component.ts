import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    constructor(private router: Router) { }

    ngOnInit() {}

    loginHandler() {
        this.router.navigate(['/promotions']);
    }

    signUpHandler() {
        this.router.navigate(['/signup']);
    }
}

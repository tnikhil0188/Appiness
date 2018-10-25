import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    emailPattern ="[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";
    mobileNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
    passwordPattern = "^[a-zA-Z0-9]{8,}$";

    options = [
        { name: "Admin", value: 1 },
        { name: "Member", value: 2 }
      ]

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

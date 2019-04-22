import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, CompanyService } from '../_services';

@Component({ templateUrl: 'newcompany.component.html' })
export class newcompanyComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private companyService: CompanyService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            companyName: ['', Validators.required],
            website: ['', Validators.required],
            cRate: ['', Validators.required],
            zipcode: ['', [Validators.required, Validators.minLength(5)]],
            nemployees: ['', Validators.required],
            avsalary: ['', Validators.required],
            rent: ['', Validators.required],
            cdescription: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.companyService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('New Company Created Succesfully', true);
                    //select the correct route
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

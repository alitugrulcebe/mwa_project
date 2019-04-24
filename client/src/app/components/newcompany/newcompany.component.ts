import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, CompanyService } from '../../services';
import {MatSnackBar} from "@angular/material";

@Component({ templateUrl: './newcompanycomponent.html' })
export class NewCompanyComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private companyService: CompanyService,
        private alertService: AlertService,
        private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            website: ['', Validators.required],
            rating: ['', Validators.required],
            location:['', Validators.required],
            zipCode: ['', [Validators.required, Validators.minLength(5)]],
            employeesNumber: ['', Validators.required],
            companyAvgSalary: ['', Validators.required],
            companyDesc: ['', Validators.required],
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
                    this.loading = false;
                    //this.alertService.success('New Company Created Succesfully', true);
                    this.snackBar.open("Login successful","Success",{duration:5000,direction:"ltr"});
                    //select the correct route
                    // this.router.navigate(['/']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

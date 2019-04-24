import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {MatDialogRef, MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'login-component-dialog',
  templateUrl: './login.component.dialog.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentDialog {
  myForm:FormGroup;
  error:string | null;
  constructor(public dialogRef: MatDialogRef<LoginComponentDialog>,
              private formBuilder:FormBuilder,
              private router:Router,
              private authService:AuthService,
              private snackBar: MatSnackBar) {
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
        'password': ['', Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.myForm);
    const email = this.myForm.value.userData.email;
    const password = this.myForm.value.userData.password;
    this.authService.login(email,password).subscribe(res => {
      localStorage.setItem('userData',JSON.stringify({'id':res['id'],'username':res['username'],'token':res['token'],'isAdmin':res['admin']}));
      this.authService.setLoggedIn(true);
      this.snackBar.open("Login successful","Success",{duration:5000,direction:"ltr"});
      this.dialogRef.close();
      // Navigate to the login page with extras
      this.router.navigate(['/']);
    });

  }




}


/**  Copyright 2019 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */

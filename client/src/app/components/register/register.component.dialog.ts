import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {MatDialogRef, MatSnackBar} from "@angular/material";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.dialog.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponentDialog implements OnInit {
  myForm: FormGroup;
  error: string | null

  constructor(public dialogRef: MatDialogRef<RegisterComponentDialog>,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) { //private client:AuthService
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'firstname': ['First Name'],
        'lastname': ['Last Name'],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
        'password': ['', Validators.required],
        'cpassword': ['', Validators.required],
        'term': ['']
      })
    });

    // this.myForm.statusChanges.subscribe(
    //   (data: any) => console.log(data)
    // );
  }

  onSubmit() {
    const user = {
      firstname: this.myForm.value.userData.firstname,
      lastname: this.myForm.value.userData.lastname,
      email: this.myForm.value.userData.email,
      password: this.myForm.value.userData.password,
    };
    this.authService.register(user).subscribe(res => {
      this.authService.login(user.email, user.password).subscribe(res => {
        console.log(res);
        localStorage.setItem('userData', JSON.stringify({
            id: res['id'],
            username: user.firstname + " " + user.lastname,
            token: res['token'],
            isAdmin: false
          })
        );
        this.authService.setLoggedIn(true);
        this.snackBar.open("Registration successful", "Success", {duration: 5000, direction: "ltr"});
        this.dialogRef.close();
        // Navigate to the login page with extras
        this.router.navigate(['/']);
      });

    });
    ;

  }

  ngOnInit() {
  }

}

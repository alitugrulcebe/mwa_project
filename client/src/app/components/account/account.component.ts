import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef, MatSnackBar} from "@angular/material";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {RegisterComponentDialog} from "../register/register.component.dialog";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  myForm: FormGroup;
  error: string | null

  constructor(private userService: UserService,
              public dialogRef: MatDialogRef<RegisterComponentDialog>,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.myForm = formBuilder.group({
        'firstname': [''],
        'lastname': [''],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
    });
  }

  ngOnInit() {
    let id = JSON.parse(localStorage.getItem('userData')).id;
    this.userService.getUserById(id).subscribe(res => {
      this.myForm.patchValue({firstname: res['firstname']});
      this.myForm.patchValue({lastname: res['lastname']});
      this.myForm.patchValue({email: res['email']});
    });
  }


  updateUser() {
      this.userService.update({
        'id':JSON.parse(localStorage.getItem('userData')).id,
        'firstname':this.myForm.value.firstname,
        'lastName':this.myForm.value.firstname,
        'email':this.myForm.value.firstname
      }).subscribe(res => {
        console.log(res);
      });
  }

  deleteUser() {
    this.userService.delete({
      'id':JSON.parse(localStorage.getItem('userData')).id,
      'firstname':this.myForm.value.firstname,
      'lastName':this.myForm.value.firstname,
      'email':this.myForm.value.firstname
    }).subscribe(res => {
      console.log(res);
      this.authService.logout();
      this.dialogRef.close();
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {LoginComponentDialog} from "../login/login.component.dialog";
import {RegisterComponentDialog} from "../register/register.component.dialog";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,private authService:AuthService) {}

  login(): void {
    const dialogRef = this.dialog.open(LoginComponentDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  register(): void {
    const dialogRef = this.dialog.open(RegisterComponentDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  cities() {

  }

  companies() {

  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

  get username(): string {
    if(localStorage.getItem("userData") !== null) {
      return JSON.parse(localStorage.getItem("userData")).username;
    }
    return '';
  }
}

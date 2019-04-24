import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CompanyService} from "../../services";
import {AuthService} from "../../services/auth.service";
import {LoginComponentDialog} from "../login/login.component.dialog";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
              private companyService:CompanyService,
              private router:Router,
              private authService:AuthService,
              public dialog: MatDialog) {
    this.myForm = formBuilder.group({
        'city': ['',Validators.required]
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    if(this.authService.isLoggedIn) {
      this.companyService.setSearchText(this.myForm.value.city);
      this.router.navigate(['/companies']);
    } else {
      const dialogRef = this.dialog.open(LoginComponentDialog);

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef, MatSnackBar} from "@angular/material";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router) {
    this.myForm = formBuilder.group({
        'city': ['']
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm.value.city);
  }
}

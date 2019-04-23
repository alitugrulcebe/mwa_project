import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CompanyService} from "../../services";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private companyService:CompanyService,private router:Router) {
    this.myForm = formBuilder.group({
        'city': ['',Validators.required]
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    this.companyService.setSearchText(this.myForm.value.city);
    this.router.navigate(['/companylist']);
  }
}

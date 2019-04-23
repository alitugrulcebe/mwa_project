import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Company} from "../models";
import {environment} from "../environment/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private searchCity:string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllCompanies() {
    return this.http.get('/protected/companies',this.httpOptions);
  }

  getCompaniesByLocation() {
    debugger;
    return this.http.post(environment.server + '/protected/company',
      JSON.stringify({city: this.searchCity}),
      this.httpOptions);
  }

  register(company: Company) {
    return this.http.post(`${environment.server}/companies/newcompany`, company);
  }

  update(company: Company) {
    return this.http.put(`${environment.server}/companies/` + company._id, company);
  }

  setSearchText(city: string[] | any | string) {
    this.searchCity = city;
  }

  get search(): string {
    return this.searchCity;
  }
}

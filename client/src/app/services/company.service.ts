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
    return this.http.get(environment.server + '/protected/companies',this.httpOptions);
  }

  getCompaniesById(id) {
    return this.http.get(environment.server + '/protected/companies/' + id);
  }

  getCompaniesByLocation() {
    return this.http.post(environment.server + '/protected/company',
      JSON.stringify({city: this.searchCity}),
      this.httpOptions);
  }

  register(company: Company) {
    return this.http.post(environment.server + '/protected/createCompany', JSON.stringify(company),this.httpOptions);
  }

  update(company: Company) {
    return this.http.put(environment.server + '/protected/companies/' + company._id, company);
  }

  setSearchText(city: string) {
    this.searchCity = city;
  }

  get search(): string {
    return this.searchCity;
  }
}

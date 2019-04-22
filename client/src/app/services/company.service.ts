import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Company} from "../models";
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllCompanies() {
    return this.http.get('/protected/companies',this.httpOptions);
  }

  getCityDetails(city) {
    return this.http.post('/protected/cities',
      JSON.stringify({city: city}),
      this.httpOptions);
  }

  register(company: Company) {
    return this.http.post(`${environment.server}/companies/newcompany`, company);
  }

  update(company: Company) {
    return this.http.put(`${environment.server}/companies/` + company.id, company);
  }
}

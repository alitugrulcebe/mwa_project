import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
}

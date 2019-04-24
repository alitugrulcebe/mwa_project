import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  city:string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllCities() {
    return this.http.get(environment.server + '/protected/cities',this.httpOptions);
  }

  getCityDetails(city) {
    return this.http.post(environment.server + '/protected/cities',
      JSON.stringify({city: city}),
      this.httpOptions);
  }

  setSearchText(city: string[] | any | string) {
    this.city = city;
  }

  get search(): string {
    return this.city;
  }
}

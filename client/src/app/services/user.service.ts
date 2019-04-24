import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,private router:Router) { }

  getUserById(id:string) {
    return this.http.get(environment.server + '/protected/users/' + id);
  }

  update(user) {
    return this.http.put(environment.server + '/protected/user/',JSON.stringify(user),this.httpOptions);
  }

  delete(id) {
    return this.http.delete(environment.server + '/protected/users/' + id);
  }

}

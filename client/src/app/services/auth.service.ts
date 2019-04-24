import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environment/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,private router:Router) {}

  login(email, password) {
    return this.http.post(environment.server + '/user/login',
      JSON.stringify({email: email, password: password}),
      this.httpOptions);
  }

  logout() {
    localStorage.removeItem('userData');
    this.authenticated = false;
    this.router.navigate(['/']);
  }

  register(user) {
    return this.http.post(environment.server + '/user/signup',
      JSON.stringify(user),
      this.httpOptions);
  }

  setLoggedIn(val: boolean) {
    this.authenticated = val;
  }

  get isLoggedIn(): boolean {
    if(localStorage.getItem("userData") !== null) {
      const token = JSON.parse(localStorage.getItem("userData")).token;
      if(token !== undefined) {
        return true;
      }
    }
    return this.authenticated;
  }

  get isAdmin(): boolean {
    if(localStorage.getItem("userData") !== null) {
      const isAdmin = JSON.parse(localStorage.getItem("userData")).isAdmin;
      if(isAdmin !== undefined) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}

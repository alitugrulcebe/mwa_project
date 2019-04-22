import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class JWTInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = localStorage.getItem('userData');
    let token = undefined;
    if(user !== null)
      token = JSON.parse(user).token;
    if(token) {
      const authReq = req.clone(
        {headers:req.headers.set('Authorization','Bearer ' + token)}
      );
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }

}

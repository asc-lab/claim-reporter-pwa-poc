import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Add Access-Control-Allow-Origin for request: ' + req.method);

    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');

    req = req.clone({
      headers: headers
    });
    return next.handle(req);
  }

}

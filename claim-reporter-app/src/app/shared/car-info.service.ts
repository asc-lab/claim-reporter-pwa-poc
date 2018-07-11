import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/index";

@Injectable()
export class CarInfoService {

  constructor(private http: HttpClient) {
  }

  getMakes(): Observable<any> {
    return this.http.jsonp(environment.car_info_api_url + 'cmd=getMakes', 'callback');
  }

  getModels(make: string): Observable<any> {
    return this.http.jsonp(environment.car_info_api_url + 'cmd=getModels&make=' + make, 'callback');
  }
}

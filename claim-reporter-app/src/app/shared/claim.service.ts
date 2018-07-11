import {environment} from "../../environments/environment";
import {Observable} from "rxjs/index";
import {Claim} from "./model/Claim";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ClaimService {

  constructor(private http: HttpClient) {
  }

  save(claim: Claim): void {
    console.log('Try save claim in database: ');
    console.log(claim);


    this.http.post(environment.main_api_url + "/api/claims", this.prepareClaim(claim)).subscribe(
      () => {
        console.log('Claim save successfully!');
        alert('Claim save successfully!');
      },
      err => console.error('Failed, reason: ', err)
    );
  }

  getAll(): Observable<Claim[]> {
    return this.http.get<Claim[]>(environment.main_api_url + "/api/claims");
  }

  private prepareClaim(claim: Claim) {
    claim.numberOfPhotos = claim.photos.length;
    let claimCopy = JSON.parse(JSON.stringify(claim));
    claimCopy.photos = [];
    return claimCopy;
  }
}

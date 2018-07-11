import {Injectable} from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {Claim} from "./model/Claim";
import {Observable} from "rxjs/index";

@Injectable()
export class ClaimCacheService {

  constructor(private localStorage: LocalStorage) {
  }

  save(claim: Claim): void {
    console.log('Try save claim in cache: ');
    console.log(claim);

    this.localStorage.setItem('claim', claim).subscribe(() => {
      console.log('Save successfully selected claim in cache');
    });
  }

  get(): Observable<Claim> {
    return this.localStorage.getItem<Claim>('claim');
  }

  clear(): void {
    this.localStorage.clear().subscribe(() => {
    });
  }
}

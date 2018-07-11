import {environment} from '../environments/environment';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';
import {FormsModule} from "@angular/forms";

import {SuiModule} from 'ng2-semantic-ui';

import {AppRoutingModule} from "./routing.module";
import {AppComponent} from './app.component';
import {ClaimCreateComponent} from './components/claim-create/claim-create.component';
import {MenuComponent} from './components/menu/menu.component';
import {ClaimListComponent} from './components/claim-list/claim-list.component';
import {FooterComponent} from './components/footer/footer.component';
import {CarInfoService} from "./shared/car-info.service";
import {PushNotificationService} from "./shared/push-notification.service";
import {CarPredicatorService} from "./shared/car-predicator.service";
import {ClaimCacheService} from "./shared/claim-cache.service";
import {ClaimService} from "./shared/claim.service";
import {HttpInterceptorService} from "./shared/http-interceptor.service";
import {NgHttpLoaderModule} from "ng-http-loader";

@NgModule({
  declarations: [
    AppComponent,
    ClaimCreateComponent,
    MenuComponent,
    ClaimListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SuiModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    NgHttpLoaderModule
  ],
  providers: [
    CarInfoService,
    PushNotificationService,
    CarPredicatorService,
    ClaimCacheService,
    ClaimService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

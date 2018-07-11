import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SwPush} from "@angular/service-worker";


@Injectable()
export class PushNotificationService {

  constructor(private http: HttpClient,
              private swPush: SwPush) {
  }

  addPushSubscriber() {
    this.swPush.requestSubscription({
      serverPublicKey: environment.vapid_public_key
    })
    .then(sub => {
      console.log("User accept notifications!");
      console.log(sub);

      this.http.post(environment.main_api_url + '/api/notifications', sub).subscribe(
        () => console.log('Subscription added successfully.'),
        err => console.error('Could not send subscription object to server, reason: ', err)
      );
    })
    .catch(err => console.error("Could not subscribe to notifications", err));
  }

  send() {
    console.log('Send notification request to server.');
    this.http.post(environment.main_api_url + '/api/notifications/enable', null).subscribe(
      () => console.log('Notification send successfully!'),
      err => console.error('Failed, reason: ', err)
    );
  }
}

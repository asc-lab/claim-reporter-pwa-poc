import {USER_SUBSCRIPTIONS} from "./in-memory-db";

const webpush = require('web-push');

export function sendNotification(req, res) {
  console.log('Total subscriptions', USER_SUBSCRIPTIONS.length);

  const notificationPayload = {
    "notification": {
      "title": "Claim Register App",
      "body": "Claim registration in progress... Go to app!",
      "icon": "assets/icon-72x72.png",
      "vibrate": [100, 50, 100],
      "data": {
        "dateOfArrival": Date.now(),
        "primaryKey": 1
      },
      "actions": [{
        "action": "explore",
        "title": "Go to the site"
      }]
    }
  };

  Promise.all(USER_SUBSCRIPTIONS.map(sub => webpush.sendNotification(sub, JSON.stringify(notificationPayload))))
    .then(() => res.status(200).json({message: 'Notifications sent successfully.'}))
    .catch(err => {
      console.error("Error sending notification, reason: ", err);
      res.sendStatus(500);
    });
}


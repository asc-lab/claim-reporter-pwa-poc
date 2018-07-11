import * as express from 'express';
import {Application} from 'express';
import {addPushSubscriber} from "./add-push-subscriber.route";
import {sendNotification} from "./send-notification.route";
import {getAllClaims, saveClaim} from "./claim-service.route";

const bodyParser = require('body-parser');
const webpush = require('web-push');
const cors = require('cors');

//Check this: https://github.com/web-push-libs/web-push
const vapidKeys = {
    "publicKey": "PUT_HERE_YOUR_VAPID_PUBLIC_KEY",
    "privateKey": "PUT_HERE_YOUR_VAPID_PRIVATE_KEY"
};

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const app: Application = express();
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));

app.route('/api/claims')
    .post(saveClaim);

app.route('/api/claims')
    .get(getAllClaims);

app.route('/api/notifications')
    .post(addPushSubscriber);

app.route('/api/notifications/enable')
    .post(sendNotification);

const PORT = 9000;
const HOST = 'localhost';

const httpServer = app.listen(PORT, HOST, () => {
    console.log("HTTP Server running at http://" + HOST + ":" + PORT);
});

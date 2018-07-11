"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var in_memory_db_1 = require("./in-memory-db");
var webpush = require('web-push');
function sendNotification(req, res) {
    console.log('Total subscriptions', in_memory_db_1.USER_SUBSCRIPTIONS.length);
    var notificationPayload = {
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
    Promise.all(in_memory_db_1.USER_SUBSCRIPTIONS.map(function (sub) { return webpush.sendNotification(sub, JSON.stringify(notificationPayload)); }))
        .then(function () { return res.status(200).json({ message: 'Notifications sent successfully.' }); })
        .catch(function (err) {
        console.error("Error sending notification, reason: ", err);
        res.sendStatus(500);
    });
}
exports.sendNotification = sendNotification;

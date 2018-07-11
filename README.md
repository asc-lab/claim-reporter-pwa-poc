# Claim Reporter - Progressive Web App with Angular

## Repo info
* ```claim-reporter-app``` - Angular 6 PWA application (service workers, push notifications enable/send, save photos in localStorage, save API request in cache)
* ```claim-reporter-server``` - Node.js + Express + in-memory-database (save/get claims, save push subscriber, send notifications to all subscribers)

## Frontend
Start with Service Workers support:
```
npm install
npm run build
```

## Backend
Server responsible for sending push notifications to users. \
Go to folder ```claim-reporter-server``` . \
Start server:
```
npm install
npm start
```
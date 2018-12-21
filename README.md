# Claim Reporter - Progressive Web App with Angular

This is sample PWA (Progressive Web App) application with Angular 6. \
Check out our blog if you want to learn more:
- [Developing PWA using Angular 7](https://altkomsoftware.pl/en/blog/developing-pwa-using-angular-7/)
- [PWAs are back and you should be happy too](https://altkomsoftware.pl/blog/pwas-back/)

## Repo info
* ```claim-reporter-app``` - Angular 6 PWA application (service workers, push notifications enable/send, save photos in localStorage, save API request in cache)
* ```claim-reporter-server``` - Node.js + Express + in-memory-database (save/get claims, save push subscriber, send notifications to all subscribers)

## Run frontend 
In _claim-reporter-app_:
```
npm install
npm run build
```
**Info:** \
With `ng serve` Service Workers doesn't work, so if you run this project first time, you must install mini HTTP server:
```
npm install -g http-server
```

## Run backend 
In _claim-reporter-server_:
```
npm install
npm start
```

## Screens
<p align="center">
    <img alt="Desktop version" src="https://raw.githubusercontent.com/asc-lab/claim-reporter/master/images/desktop_version.png" />
</p>
<p align="center">
    <img alt="Mobile version" src="https://raw.githubusercontent.com/asc-lab/claim-reporter/master/images/mobile_version.png" />
</p>
<p align="center">
    <img alt="Info about new version" src="https://raw.githubusercontent.com/asc-lab/claim-reporter/master/images/new_version.gif" />
</p>

## PWA Lighthouse report
<p align="center">
    <img alt="PWA Lighthouse report" src="https://raw.githubusercontent.com/asc-lab/claim-reporter/master/images/lighthouse_report.png" />
</p>


## License
This project is released under the Apache 2.0 license (see [LICENSE](LICENSE))

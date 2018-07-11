FROM node:8.9 as node

RUN mkdir -p /usr/src/app

# Building Angular app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN npm install
COPY . /usr/src/app

EXPOSE 4200
CMD ["npm", "run", "build"]

FROM node:10
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app

RUN npm install -g @angular/cli
RUN npm install


COPY . /usr/src/app
EXPOSE 4200
CMD ng serve --host 0.0.0.0 --disable-host-check

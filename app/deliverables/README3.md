<h2><center>CSI 3140 Project Deliverable 3</center></h2>

<center><img src="/app/assets/logo.svg?sanitize=true" height="100" width="100">
</img>
</center>

> Ferozuddin Alizada
> 8922142
>
> **Deliverable 3:** To further develop the app I used a `MEAN` ( MongoDB, ExpressJS, Angular, and NodeJS) stack of technologies. We will also be using bootstrap to make the UI responsive. The Front-end will be in Angular which is located in `MusiQ`. And the database and the back-end can be found in`backend/database/mongodb.js`and`backend/src/api.js`

---

## Table of contents

1. [Introduction](#introduction)
2. [Server Technology](#server-technology)
3. [Database Technology](#database-technology)
4. [Automated Test FrameWork](#automated-test-frameWork)
5. [Deployment Upgrade Script](#deployment-upgrade-script)
6. [Refined HTML/CSS and UI Design System](#refined-html-css-and-ui-design-system)
7. [FrontEnd Mock Interactivity JS](#frontend-mock-interactivity-js)
8. [Installation](#installation)

### Introduction:

This is a basic MEAN stack setup of the web application and has limited functionality. The source code are: [Frontend](/MusiQ/README.md), [BackEnd](/backend/src/api.js), [Database](backend/database/mongodb.js).

### Server Technology

The server or the backend technology for used is written in NodeJS with the ExpressJS framework [BackEnd](/backend/src/api.js).

#### Database Technology

I used the MEAN stack simply to get some hands on experience on learning to use NOSQL. And that is why the Database Technology I used for this project is MongoDB [BackEnd](/backend/src/api.js)

#### Automated Test FrameWork

Angular uses Jasmine Testing Framework as the default. which uses Karma as a test runner and displayed in the browser. As for MongoDB and Express I am using Mocha Testing framework. The Test files can be found in [Express Test](/backend/src/test/runner.js) and [MongoDB Test](/backend/database/test/runner.js).

To run the test simply use command line to browse to the `/backend/src` or `/backend/database` folders and run `npm install` and then after the installation is complete run `npm test`. Further instructions in the Installation Section.

### Deployment Upgrade Script

Every Technology has a few npm dependencies which needs to be installed for the application to be deployed.

NOTE: Travic CI is added for continous deployment and integration but due to the security on the branch it can not be deployed.

### Refined HTML CSS and UI Design System

This will be a single page web application with Angular 9. The Refined HTML/CSS + UI is included in the `MusiQ` folder to run it simply follow the step in the installation.

### FrontEnd Mock Interactivity JS

Front-End Mock interactivity was included in the last deliverable. It will be a bit buggy with angular if it is provided. Since it requires using services to pass around data instead of simply adding event listeners.

### Installation

To run this application you need the following softwares/technologies.

1. [NodeJS](https://nodejs.org/en/download/) and npm
2. Run `npm install -g @angular/cli@latest` to install Angular CLI or run `npm install @angular/cli@latest` to install it locally which usually needs you to be in the MusiQ directory
3. [MongoDB](https://www.mongodb.com/download-center/community)

After installing these softwares you can navigate to the MusiQ folder in the root directory and run

1. `npm install`
2. `ng serve`
3. `ng test` to run the unit tests

The web application will be served on [localhost:4200](http://localhost:4200/) or the port written in the console.

To start the database navigate to `backend/src/` and run

1. `npm install`
2. `npm start`
3. Run `npm test` to run the tests

To start the database navigate to `backend/database/` and run

1. `npm install`
2. `npm start`
3. Run `npm test` to run the tests

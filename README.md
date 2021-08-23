<h2><center>CSI 3140 Project Deliverable 3</center></h2>

<center><img src="/app/assets/logo.svg?sanitize=true" height="100" width="100">
</img>
</center>

> Ferozuddin Alizada
> 8922142
>
> **Deliverable 3:** The app is made using the `MEAN` ( MongoDB, ExpressJS, Angular, and NodeJS) stack of technologies. The Front-end will be in Angular which is located in `MusiQ`. And the database and the back-end can be found in`backend/src/mongodb.js`and`backend/src/api.js`

---

## Table of contents

1. [Introduction](#introduction)
2. [Implementation Of Features](#implementation-of-features)
3. [Documentation](#documentation)
   1. [Automated Testing](#automated-testing)
   1. [Installation And Development](#installation-and-development)
4. [UI Design](#ui-design)
5. [Sample Data](#sample-data)
6. [Screenshots](#screenshots)

### Introduction:

This is a basic MEAN stack setup of the web application and has limited functionality. The source code are: [Frontend](/MusiQ/README.md), [BackEnd](/backend/src/api.js), [Database](backend/src/mongodb.js).

### Implementation Of Features

Since the project is a huge application and would require more than just a week or two weeks of works to complete since this is a fully functional music streaming application that uses AWS CDN technology to cache data on servers around the world to ease loading for the next user in that specific location. And implementing this requires a lot more time. The music streaming application as of now has basic functionality including Registration to the Database, Login, and music playback. It lacks the ability of storing sessions. Which will be out in the next version.

But the server can handle as much as 10,000 users since the load is distributed on AWS servers.

#### Documentation

The MEAN stack music streaming app is a complicated piece of work since it is supposed to be huge with many features. And usage, deployment, and installation requires a lot of complicated procedures.

##### Automated Testing

Angular uses Jasmine Testing Framework as the default. which uses Karma as a test runner and displayed in the browser. As for MongoDB and Express I am using Mocha Testing framework. The Test files can be found in [Express Test](/backend/src/test/runner.js) and [MongoDB Test](/backend/src/test/runner2.js).

To run the test simply use command line to browse to the `/backend/src` or `/backend/database` folders and run `npm install` and then after the installation is complete run `npm test`. Further instructions in the Installation Section.

##### Installation And Development

Every Technology has a few npm dependencies which needs to be installed for the application to be deployed.

NOTE: Travic CI is added for continous deployment and integration but due to the security on the branch it can not be deployed.

Simply install docker and run `docker-compose docker-compose.yml up` from the root folder

This is the simplest way to develop the application and use to it testing.

Or follow the following steps to install a developer version of it where you can edit the source code.

To run this application you need the following softwares/technologies.

1. [NodeJS](https://nodejs.org/en/download/) and npm
2. Run `npm install -g @angular/cli@latest` to install Angular CLI or run `npm install @angular/cli@latest` to install it locally which usually needs you to be in the MusiQ directory
3. [MongoDB](https://www.mongodb.com/download-center/community)

After installing these softwares you can navigate to the MusiQ folder in the root directory and run make sure MongoDB server is running.

navigate to your MongoDB bin files and run `mongo` for mac

1. `npm install`
2. `ng serve`
3. `ng test` to run the unit tests

The web application will be served on [localhost:4200](http://localhost:4200/) or the port written in the console.

To start the database and the backend navigate to `backend/src/` and run

1. `npm install`
2. `npm start`
3. Run `npm test` to run the tests

if the database fails to run simply run `npm start` again

After running everything you can then test the login and Registeration of the web applicaiton.

### UI Design

The UI design is simple to make it easy for the day to day clients to simply play and pause music.

### Sample Data

Sample data is seeded in the AWS cloud which includes the audio files and the cover photos for the albums. the links can be found in [Sample data](/backend/src/mongodb.js)

### Screenshots

Not everything is functioning, basic functionality has been implemented to show understanding of the technologies and languages.

![image](/app/assets/snap-3.png)

![image](/app/assets/snap-4.png)

![image](/app/assets/snap-1.png)

![image](/app/assets/snap-2.png)
![image](/app/assets/s1.png)
![image](/app/assets/s2.png)
![image](/app/assets/s3.png)
![image](/app/assets/s4.png)
![image](/app/assets/s5.png)
![image](/app/assets/s6.png)
![image](/app/assets/s7.png)

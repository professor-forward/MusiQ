FROM node:10
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
# RUN npm cache clean
RUN npm install
COPY . /usr/src/app
EXPOSE 8083 27017
CMD ["npm","start"]
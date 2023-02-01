FROM node:18.13.0

WORKDIR /usr/src/app-react

COPY package.json ./

COPY . .

RUN npm install

EXPOSE 3334
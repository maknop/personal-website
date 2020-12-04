FROM node:13-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm update
RUN npm install 
RUN npm install -g gatsby-cli

EXPOSE 8000

CMD [ "gatsby", "develop", "-H", "0.0.0.0" ]

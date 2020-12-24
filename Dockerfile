FROM node:8-alpine

WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm i
EXPOSE 8080
CMD ["npm","start"]
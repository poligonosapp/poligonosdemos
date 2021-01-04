
FROM node:8-alpine

WORKDIR /usr/src/app
ADD . /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm i
# Bundle app source
COPY . .
EXPOSE 8080
CMD ["yarn","start"]


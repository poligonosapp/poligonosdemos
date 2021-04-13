FROM node:15-slim as build

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh yarn

RUN mkdir /app

# check every 30s to ensure this service returns HTTP 200
HEALTHCHECK --interval=30s CMD node healthcheck.js

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm build

# ---------------

FROM node:15-alpine

RUN mkdir -p /app/build

RUN apk update && apk upgrade && apk add yarn git

# check every 30s to ensure this service returns HTTP 200
HEALTHCHECK --interval=30s CMD node healthcheck.js

WORKDIR /app

COPY --from=build /app/package.json .

RUN npm install --production

COPY --from=build /app/build ./build
COPY --from=build /app/src/auth_config.json ./src/auth_config.json
COPY --from=build /app/server.tsx .
COPY --from=build /app/api-server.tsx .

EXPOSE 3000
EXPOSE 3001
# EXPOSE 5000
EXPOSE 5001

ENV SERVER_PORT=3000
ENV API_PORT=3001
ENV NODE_ENV production

CMD ["yarn", "prod"]


FROM node:15-alpine

# check every 30s to ensure this service returns HTTP 200
HEALTHCHECK --interval=30s CMD node healthcheck.js

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
CMD ["npm","start"]




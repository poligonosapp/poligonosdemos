ARG VARIANT="15-buster"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}}
FROM node:15-alpine as build

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh yarn

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

# ---------------

FROM node:15-alpine

RUN mkdir -p /app/build

RUN apk update && apk upgrade && apk add yarn git

WORKDIR /app

COPY --from=build /app/package.json .

RUN yarn install --production

COPY --from=build /app/build ./build
COPY --from=build /app/src/auth_config.json ./src/auth_config.json
COPY --from=build /app/server.ts .
COPY --from=build /app/api-server.ts .

EXPOSE 3000
EXPOSE 3001
# EXPOSE 5000
EXPOSE 5001

ENV SERVER_PORT=3000
ENV API_PORT=3001
ENV NODE_ENV production

CMD ["npm", "prod"]


FROM node:15-alpine

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




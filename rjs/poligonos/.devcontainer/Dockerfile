FROM node:14-alpine

WORKDIR /code

RUN npm install -g nodemon

## cmd.exe npx nodemon --exec npm run babel-node - ./src/demo.js

COPY package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules

COPY . /code

CMD ["npm", "start"]


FROM node:15.13.0-buster-slim
ENV LAST_UPDATED 20160617T185400

# Copy source code
COPY . /app

# check every 30s to ensure this service returns HTTP 200
HEALTHCHECK --interval=30s CMD node healthcheck.js

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Expose API port to the outside
ENV PORT 80
EXPOSE 80

# Launch application
CMD ["npm","start"]

FROM node:15.13.0-buster-slim

# check every 30s to ensure this service returns HTTP 200
HEALTHCHECK --interval=30s CMD node healthcheck.js

WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm i
EXPOSE 8080
CMD ["npm","start"]
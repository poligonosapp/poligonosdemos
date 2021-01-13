FROM node:4.4.5
ENV LAST_UPDATED 20160617T185400

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN yarn install

# Expose API port to the outside
ENV PORT 80
EXPOSE 80

# Launch application
CMD ["yarn","start"]

FROM node:8-alpine

WORKDIR /usr/src/app
ADD . /usr/src/app
RUN yarn i
EXPOSE 8080
CMD ["yarn","start"]
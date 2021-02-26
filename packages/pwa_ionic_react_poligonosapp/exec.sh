#!/usr/bin/env bash
docker build -t auth0-poligonosapp-calling-an-api .
docker run --init -p 3000:3000 -p 3001:3001 -it auth0-poligonosapp-calling-an-api
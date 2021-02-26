docker build -t luismendes070/poligonosapp
docker images
docker run -p 49160:8080 -d luismendes070/poligonosapp
docker ps
#!/bin/bash

echo "Building"
docker build -t booking-fe-react .docker
docker stop -f booking-fe-react
docker run -dit --rm --name booking-fe-react -v ~/repos/personals/booking-fe:/var/www/html/booking-fe -p 3000:3000 booking-fe-react

echo "Networking"
docker network rm booking
docker network create booking
docker network connect booking booking-fe-react

#docker exec booking-fe-react rm -rf node_modules
#docker exec booking-fe-react npm i

docker exec -d booking-fe-react npm start
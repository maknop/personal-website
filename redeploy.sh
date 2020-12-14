#!/bin/sh
docker container stop $(docker container ls -aq)
docker container rm $(docker container ls -aq)

docker pull maknop/personal-website:latest
docker run -d -p 127.0.0.1:8000:8000 maknop/personal-website:latest
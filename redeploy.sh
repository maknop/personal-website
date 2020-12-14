#!/bin/sh
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

docker pull maknop/personal-website:latest
docker run -d -p 127.0.0.1:8000:8000 maknop/personal-website:latest
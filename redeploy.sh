#!/bin/sh
sudo docker container stop $(docker container ls -aq)
sudo docker container rm $(docker container ls -aq)

sudo docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD

sudo docker pull maknop/personal-website:latest
sudo docker run -d -p 127.0.0.1:8000:8000 maknop/personal-website:latest
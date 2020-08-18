#!/bin/bash
docker run -it --name vuejs --user 1000:1000 --net=host -v $PWD/pro-vuejs:/pro-vuejs -w /pro-vuejs node:lts bash

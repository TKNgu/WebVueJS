#!/bin/bash

docker run -d --rm -v $PWD/blog/:/blog/ -v $PWD/default.conf:/etc/nginx/conf.d/default.conf \
	--net=host --name blog_server nginx

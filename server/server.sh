#!/bin/bash
json-server --watch db.json --routes routes.json --static ./public/ --middlewares hello.js
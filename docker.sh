#!/bin/bash

docker pull node:14.16
MSYS_NO_PATHCONV=1 docker run -i -v $(pwd):/usr/src -w /usr/src --rm node:14.16 yarn
MSYS_NO_PATHCONV=1 docker run -i -v $(pwd):/usr/src -w /usr/src --cpus=1 -m=500m --rm node:14.16 yarn $1
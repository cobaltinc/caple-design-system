#!/bin/bash

cd "$(dirname "$0")"

set -e
set -x

cd ..

root_path=$PWD

if [ -n "$(git status --porcelain)" ]; then
  echo "Your git status is not clean. Aborting.";
  exit 1;
fi

./node_modules/.bin/lerna publish "$@"
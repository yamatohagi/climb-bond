#!/bin/bash
set -e
pwd
ls
git log -n 1
npm install
NODE_OPTIONS="--max-old-space-size=4096" npm run build
pm2 restart climb-bond
pm2 save

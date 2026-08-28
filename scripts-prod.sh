#!/bin/sh
cd /Users/yourmacbookair/Documents/trackmycars-platform || exit 1
./node_modules/.bin/next build && exec ./node_modules/.bin/next start --port 3003

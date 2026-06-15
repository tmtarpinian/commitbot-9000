#!/bin/bash

while true
do
  clear
  echo "Refreshing leaderboard..."
  date

  node scripts/build-leaderboard.js

  sleep 10
done
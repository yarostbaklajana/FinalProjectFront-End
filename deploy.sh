#!/bin/bash

set -o errexit #abort if any command fails

REPO=https://yarostbaklajana:$GH_TOKEN@github.com/yarostbaklajana/FinalProjectFront-End.git


# config
git config --global user.email "travis"
git config --global user.name "travis CI deploy"

# deploy
git push --force --quiet $REPO master:gh-pages 
echo "Successfully pushed changes to GitHub Pages"

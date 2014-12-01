#!/bin/sh
echo "Deploying to gh-pages..."
git subtree push --prefix public origin gh-pages

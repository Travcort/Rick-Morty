#!/bin/bash

# Exit on any failure
set -e

# Installing Project Dependecies for the Backend
echo "Installing Project Dependencies..."
npm install

# Building the Frontend
echo "Building the frontend..."
npm run build

echo "Build Completed!"
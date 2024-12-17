#!/bin/bash

# Exit on any failure
set -e

# Installing Project Dependecies for the Backend
echo "Installing Project Dependencies for the backend..."
npm install

if [[ -d 'frontend' ]]; then
    # Installing Project Dependecies for the Frontend
    echo "Installing Project Dependencies for the frontend..."
    npm install --prefix frontend

    # Building the Frontend
    echo "Building the frontend..."
    npm run build --prefix frontend
else
    echo "The Frontend Directory is missing!"
fi

# Starting the Server
echo "Starting the application..."
npm start

echo "Build Completed!"
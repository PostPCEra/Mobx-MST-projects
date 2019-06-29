# React_Express_App 
- This repo is clone of below mentioned origial repo
- This repository has the code to support a tutorial Create a React FrontEnd, a Node/Express BackEnd and connect them together.
- support tutorial [Create a React FrontEnd, a Node/Express BackEnd and connect them together](https://medium.com/@jrshenrique/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c)

# My Customization
- pybackend folder was added which constains, python scripts which are expected to be executed by phthon 'bottle' server
- install 'bottle' server first
- $python bottle_server.py  (starts server on port 4999)


## About the app
Actually, there are two separated apps. The Client which serves the FrontEnd (using React), and the API (in Node/Express).

## How to run the API
1. In your terminal, navigate to the `api` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app.

## How to run the Client
1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

## Check if they are connected
1. With the two apps running, open your browser in http://localhost:3000/.
2. If you see a webpage saying `Welcome to React`, it means the FrontEnd is working.
3. If the same webpage has the phrase `API is working properly`, it means the API is working.
4. Enjoy!

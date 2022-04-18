# Front-End

[![FE-Build](https://github.com/CS401-Team-Project/Front-End/actions/workflows/node.yml/badge.svg)](https://github.com/CS401-Team-Project/Front-End/actions/workflows/node.yml)

## Installation and Deployment

Note: These instructions are for local deployment of the **front-end only**.  
To deploy all components at once (Front-End, Back-End, and Database), please see the Docker-Compose deployment
instructions in the main [Smart-Ledger repository](https://github.com/CS401-Team-Project/Smart-Ledger).

### Install Node 16.13.0

```
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
nvm install 16.13.0
```

### Install Dependencies:

```
npm install
npm install react-scripts -g
```

### Start it up:
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
```
npm start
```

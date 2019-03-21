const express = require('express');
const path = require( 'path');  // built in node utility

const app = express();

// the way CRA works is, when Webpack runs, it creates a build folder
// with index.html and the bundle.js
const pathToIndexHtml = path.join(__dirname,'build', 'index.html'); // __dirname = global variable of the Path to wherever this CRA is on the server
// path.join will join the arguments passed in and creates a real path to the asset (index.html)
const pathToBuildFolder = path.join(__dirname, 'build');


// 2. allow static assets to be served off of this folder (build)
// mount a express built in middleware, which takes a path to the build folder as an argument
app.use(express.static(pathToBuildFolder));


app.get('/', (req, res) => {
  // 1. send file from a path
  res.sendFile(pathToIndexHtml)  // sendFile needs an absolute path to an asset
})

app.listen(process.env.PORT || 5555);


/* 
We need to refactor SCRIPTS in package.json for Heroku to work with them!!!
Change start script to:     "start": "node server.js",

*/
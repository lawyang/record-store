const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// points to public folder for app.use
app.use( express.static('server/public') );

// body parser
app.use(bodyParser.urlencoded({extended: true}));

const recordRouter = require('./routers/record.router');
app.use( '/record', recordRouter);


//globals
const port = 5000;

// spin up server listener
app.listen( port, () => {
    console.log('server is up and running on port:', port );
} ) 

'use strict';

///////////////////////
/////   Server   /////
//////////////////////

const express         = require('express');
const bodyParser      = require('body-parser');
const logger          = require('morgan');
const keys            = require('./config').init();

const app = express();

///// Pass keys to DB Configuration file /////

require('./db/mongoose')(keys.db);

///// Register Middleware /////

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

///// Routes registration and configuration /////

const root = express.Router();

require('./routes/root')(root);

///// API Catalague /////

app.get('/', root);


///// Server Initialization /////

const port = process.env.PORT || keys.port;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
//Import Routes (Middleware)

const getsRoute = require('./routes/gets');

app.use('/',getsRoute);

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Connect to Database

mongoose.connect(process.env.DATABASE_CONNECTION, () => {
console.log('Connected to Database!')

});


//Server

app.listen(3000);
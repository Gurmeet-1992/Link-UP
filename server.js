const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');



const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

// connect db
mongoose
    .connect(db)
    .then(()=>console.log('database connected'))
    .catch((err)=>console.log(err))

//passport intialize
app.use(passport.initialize());

//passprt config
require('./config/passport')(passport);

//use routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

const port = 5000 || process.env.port;

app.listen(port,()=>console.log(`the web app is running on ${port}`));
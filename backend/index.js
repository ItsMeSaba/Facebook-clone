const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const usersRoute = require('./routes/users.js');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser : true, useUnifiedTopology : true },
    () => console.log('Connected To DB')
)

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cookieParser());


app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin" : "http://localhost:3000",
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Credentials" : "true"
    });

    next();
})

app.use('/api/users', usersRoute); 

app.listen(5000, () => console.log('Server Started'));
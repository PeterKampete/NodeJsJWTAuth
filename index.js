const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//import routes
const authRoute = require('./routes/auth');
dotenv.config();
//Connect to DB
mongoose.connect(process.env.DB_CONNECT,() => console.log('Connected to DB'))

//Middleware
app.use(express.json());


//Route Middlewares

app.use('/api/users', authRoute)


app.listen(3000,() => console.log('listening on port 3000'));
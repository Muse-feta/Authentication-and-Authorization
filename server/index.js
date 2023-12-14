const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express()
require('dotenv').config();
const userRoutes = require('./routes/userRoutes')

const PORT = process.env.PORT;
const URI = process.env.URI;

//  middlewares 
app.use(
  cors({
    origin: true,
    methods: ['GET','POST'],
    credentials: true
  })
);
app.use(express.json());
app.use(cookieParser())

// userMiddleware
app.use('/api/user', userRoutes)

app.get('/', (req, res) => {
    res.send('hello there')
})

mongoose.connect(URI).then(() => {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT} and connectiing to mongoDB_Compass`)
    });
}).catch((err) => {
    console.log(err)
});


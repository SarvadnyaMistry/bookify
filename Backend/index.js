// Old syntax 
// const express = require('express')
// const dotenv  = require('dotenv')

// ES6 Syntax 
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";

import bookRoute from './route/book.route.js'
import cors from 'cors';
import userRoute from "./route/user.route.js"
const app = express()
// const port = 3000
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB server
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error:",error);
}
//defining Routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

// app.get('/', (req, res) => {
//   res.send('Hello')
// })

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
const express = require('express');
var cookieParser = require('cookie-parser');
const path = require("path");
const app = express();
const cors = require("cors");

if(process.env.NODE_ENV !== "production"){

  require("dotenv").config({path:"config/config.env"});
}

//Using Middlewares
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true}));
app.use(cookieParser());

//cors
app.use(cors({  
  origin:[["https://social-media-backend-leud.onrender.com"],["http://localhost:4000"],["http://localhost:4000"]],
  methods:['GET','POST','PUT','DELETE','PATCH'],
  credentials:true,
}));

//Importing Routes
const  post  = require('./routes/post'); //from routes folder post.js
const  user  = require('./routes/user'); 

app.get("/", (req, res) => {
  res.send("API is running....");
});

//Using Routes
app.use("/api/v1",post); //localhost:3000/api/v1/post/upload
app.use("/api/v1",user);//localhost:3000/api/v1/register

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports=app;




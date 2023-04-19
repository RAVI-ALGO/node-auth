//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const mainRoutes = require("./routes/mainRoute");

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect(process.env.DB_CONN).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log(err);
});

app.use("/",mainRoutes);



app.listen(5000,()=>{
    console.log("server started on port 5000");
})
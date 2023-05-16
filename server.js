const express = require("express");
const erroHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();// creating a dotenv constant to fetch the port from dotenv files

connectDb();
const app = express();
const port = process.env.PORT||5000;

app.use(express.json()); // To parse the stream and get the body

//creating the http client---using Thunderclient
app.use("/api/contacts",require("./routes/contactRoutes"));//app.use == middleware
app.use("/api/users",require("./routes/userRoutes"));

app.use(erroHandler);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});



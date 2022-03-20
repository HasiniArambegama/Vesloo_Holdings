//dependencies assign to variables.
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { required } = require("nodemon/lib/config");
//const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    //useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    //useFindAndModify: false 
});

//opend the connection, event is open.
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Connection success!")

})

//Access to router employee file
 
const employeeRouter = require("./routes/Employee.js");

//http://localhost:8070 -backend url

http://localhost:8070/employee

app.use("/Employee", employeeRouter);



//run in declared port

app.listen(PORT, () => {
    console.log(`Sever is up and running on port ${PORT}`);

})
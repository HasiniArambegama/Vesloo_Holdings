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
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
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

//Access to router file
 
const employeeRouter = require("./routes/Employee.route.js");


const empattendanceRouter = require("./routes/EmpAttendance.route.js");


const machineRouter = require("./routes/Machine.route.js");

const supplierRouter = require("./routes/Supplier.route.js");


const expenseRouter = require("./routes/Expense.route");

const basicinformationRouter = require("./routes/BasicInformation.route.js");

const empsalaryRouter = require("./routes/EmpSalary.route.js");


//http://localhost:8070 -backend url

http://localhost:8070/employee

app.use("/Employee", employeeRouter);

app.use("/Machine", machineRouter);

app.use("/Supplier", supplierRouter);


app.use("/Expense", expenseRouter);

app.use("/EmpAttendance", empattendanceRouter);

app.use("/BasicInformation", basicinformationRouter);

app.use("/EmpSalary", empsalaryRouter);




 const stockRouter = require("./routes/Stock.route.js");
 app.use("/Stock",stockRouter );




//run in declared port

app.listen(PORT, () => {
    console.log(`Sever is up and running on port ${PORT}`);

})
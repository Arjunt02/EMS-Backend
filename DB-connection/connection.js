
// import mongoose
const mongoose = require('mongoose')

// connection string assign a variable "connectionString"
const connectionString = process.env.DATABASE

// connect mongoose
mongoose.connect(connectionString, {useUnifiedTopology: true,useNewUrlParser: true}).then(()=>{
    console.log("mongodb atlas connected to ems server");
}).catch((error)=>{
     console.log("mongodb connection failed");
})
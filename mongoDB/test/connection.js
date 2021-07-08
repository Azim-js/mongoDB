// this is connection to mongodb 

const mongoose=require('mongoose');
// connection

mongoose.connect("mongodb://localhost/testdb");

// testing connection by events .once('open')

mongoose.connection.once('open',function(){
    console.log("connection successfull !!!!");
}).on('error',function(){console.log("connection error !!!")});


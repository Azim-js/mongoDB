// this is connection to mongodb 

const mongoose=require('mongoose');
// connection

// using ES6 as promises
mongoose.Promise=global.Promise;

// data connection before the testing

before(function(done){
    mongoose.connect("mongodb://localhost/testdb");
    // testing connection by events .once('open')

    mongoose.connection.once('open',function(){
    console.log("connection successfull !!!!");
    done();
}).on('error',function(){console.log("connection error !!!")});
   
})

// before each test

beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});





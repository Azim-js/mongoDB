// mocha to test to run 

const mocha=require('mocha');
const assert=require('assert');

// importing the mario model from connection.js

const marioChar=require('../models/marioChar');

describe("to save the data (create new records) ",function(done){
    // creating test1
    it('will save the data',function(){
        const char=new marioChar({
            name:"lugi"
        });
        // async with promises to pending and resolved state
        char.save().then(function(){
            assert(char.isNew===false);
            done();
        })
    })
})
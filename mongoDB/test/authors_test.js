// for nested Schema the collection of data

const assert=require('assert');
const mongoose=require('mongoose');
const Author=require('../models/authors');

describe("nested docments in collection ",function(){

    // for droping data each test
    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done();
        })
    })

    // test 1
    
    it('adds a author and book as a record ',function(done){
        var azim=new Author({
            name:"Azim",
            books:[{title:"journey of a developer",pages:400}]
        })

        azim.save().then(function(){
            Author.findOne({name:"Azim"}).then(function(record){
                assert(record.books.length===1);
                done();
            })
        })
    })

    // test 2
    it('adds a nested document in the books array',function(done){
        var azim=new Author({
            name:"Azim",
            books:[{title:"testing mongoDB using Mocha",pages:300}]
        })
        azim.save().then(function(){
            Author.findOne({name:"Azim"}).then(function(record){
                record.books.push({title:"journey of developer",pages:400});
                record.save().then(function(){
                    Author.findOne({name:"Azim"}).then(function(result){
                        assert(result.books.length===2);
                        done();
                    })
                })
            })
        })
    })
})
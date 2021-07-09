
// creating new author model which 

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

// creation os schemas 

const BooksSchema= new Schema({
    title:String,
    pages:Number
});

// nesting the schemas

const AuthorsSchema=new Schema({
    name:String,
    Books:[BooksSchema]
})

// creation of models

const Author=mongoose.model('author',AuthorsSchema);

console.log("hello")
exports.module=Author;

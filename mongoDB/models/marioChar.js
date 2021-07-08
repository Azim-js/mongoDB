// this contains mariocharater schema amd model

const mongoose=require('mongoose');

const Schema=mongoose.Schema;

// creating Schema 

const marioCharSchema=new Schema({
    name:String,
    weight:Number
})

// creating model mongoose.model('collection',schema)

const marioChar=mongoose.model('mariochar',marioCharSchema);

// to use it as new marioChar
module.exports=marioChar;
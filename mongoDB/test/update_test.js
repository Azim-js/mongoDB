// for updating records

const assert=require('assert');
const marioChar=require("../models/marioChar");

describe("for updating the record ",function(){
    var char;

    beforeEach(function(done){
            char=new marioChar({
                name:"Azim",
                weight:66
            })
            char.save().then(function(){
                done();
            })
    })
    it("updates the record after finding ",function(done){
        marioChar.findOneAndUpdate({name:'Azim'},{name:'Donkey Kong'}).then(function(){
            marioChar.findOne({_id:char._id}).then(function(result){
                assert(result.name==="Donkey Kong");
                done();
            })
        })
    })

    it("incremeant the weight by 1",function(done){
        marioChar.update({$inc:{weight:1}}).then(function(){
            marioChar.findOne({name:'Azim'}).then(function(result){
                assert(result.weight===67);
                done();
            })
        })
    })
})
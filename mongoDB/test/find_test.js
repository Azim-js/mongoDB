const assert=require('assert')
const marioChar=require('../models/marioChar')

describe("finding data ",function(){
    var char;
    beforeEach(function(done){
         char=new marioChar({
            name:"Mario",
            weight:30

        });
        char.save().then(function(){
            // assert(char.isNew===false);
            done();
        })
    });
    // test 1 
    it('finds one record from database',function(done){
        marioChar.findOne({name:'Mario'}).then(function(result){
            assert(result.name==='Mario');
            done();
        })
    });
    // test 2 to find by default id 
    it('finds one record  by default id from database',function(done){
        marioChar.findOne({_id:char._id}).then(function(result){
            assert(result._id.toString()===char._id.toString());
            done();
        })
    })
})
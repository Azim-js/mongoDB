// for deleting  records .remove

const assert=require('assert');
const marioChar=require('../models/marioChar')

describe('Deleting the Record',function(){
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
    })
// test case
    it('deletes the record from the database',function(done){
        marioChar.findOne({name:'lugi'}).then(function(){
            marioChar.findOne({name:'lugi'}).then(function(result){
                assert(result===null);
                done();
            })
        })
    })
})
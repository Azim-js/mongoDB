const assert=require('assert')
const marioChar=require('../models/marioChar')

describe("finding data ",function(){
    beforeEach(function(done){
        var char=new marioChar({
            name:"Mario",
            weight:30

        });
        char.save().then(function(){
            assert(char.isNew===false);
            done();
        })
    });
    it('finds one record from database',function(done){
        marioChar.findOne({name:'Mario'}).then(function(result){
            assert(result.name==='Mario');
            done();
        })
    })
})
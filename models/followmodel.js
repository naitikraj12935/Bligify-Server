const mongoose=require('mongoose');

const followschema=new mongoose.Schema({
    followto:{
        type:String,

    },
    followby:{
        type:String
    }
})

const follow=mongoose.model('follow',followschema);

module.exports=follow;
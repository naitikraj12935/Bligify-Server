const mongoose=require('mongoose');

const Likeschema=new mongoose.Schema({
    postid:String,
    Likeby:{
        type:String
    }
})

const Like=mongoose.model('like',Likeschema);

module.exports=Like;
const mongoose=require('mongoose')
const tokenschema=new mongoose.Schema({
    token:{
        type:String,
        required:true
    }
})
const token=mongoose.model('token',tokenschema);
module.exports=token;
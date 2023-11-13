const mongoose=require('mongoose');
const imageSchema=new mongoose.Schema({
    imagelink:{
        type:String,
        
    }
})
const image=mongoose.model('image',imageSchema);
module.exports=image;
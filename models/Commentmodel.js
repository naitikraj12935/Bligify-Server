const mongooes=require('mongoose');

const commentSchema=new mongooes.Schema({
   id:{
    type:String,
    required:[true,'enter id']
   },
    description:{
        type:String,
        required:[true,'enter content']
    },
    
    userName:{
        type:String,
        required:[true,'verify user']
    },
    
    createDate:{
        type:Date
     
      
    }
})
const comment=mongooes.model('comment',commentSchema);
module.exports=comment;
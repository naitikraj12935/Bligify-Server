const mongooes=require('mongoose');

const postSchema=new mongooes.Schema({
    title:{
        type:String,
        required:[true,'enter a tutle'],
        unique:true
    },
    description:{
        type:String,
        required:[true,'enter content']
    },
    picture:{
        type:String

        
    },
    userName:{
        type:String,
        required:[true,'verify user']
    },
    categories:{
        type:String,
        required:true
    },
    createDate:{
        type:Date
     
      
    }
})
const post=mongooes.model('post',postSchema);
module.exports=post;
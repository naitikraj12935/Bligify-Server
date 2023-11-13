const mongooes=require('mongoose');

const viewSchema=new mongooes.Schema({
    id:String,
    numview:{
        type:Number,
        default:0
    }
})

const View=mongooes.model('view',viewSchema);
module.exports=View;
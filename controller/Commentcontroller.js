const comment=require('../models/Commentmodel');

const getcomment=async(req,res)=>{
    try{
        const commentdata=await comment.find({id:req.query.id}).sort({createDate:'desc'});
        res.status(200).json({
            status:'ok',
            data:{
                commentdata:commentdata
            }
        })
    }
    catch{
         res.status(500).json({
            status:'fail'
         })
    }
  
}
const postcomment=async(req,res)=>{
    try{
        const commentdata= await comment.create(req.body);
        res.status(200).json({
            status:'ok',
            
        })
    }
    catch{
         res.status(500).json({
            status:'fail'
         })
    }

}
const deletecomment=async(req,res)=>{
    try{
        const commentdata= await comment.findByIdAndDelete(req.query.id);
        res.status(200).json({
            status:'ok',
            
        })
    }
    catch{
         res.status(500).json({
            status:'fail'
         })
    }

}

module.exports={getcomment,postcomment,deletecomment};
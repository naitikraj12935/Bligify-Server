
const image=require('../models/image');
const uploadfile=async(req, res)=>{
     console.log(req.file);
     try{
          if(!req.file)
          {
            res.status(404).json({
                message:'image is not uploaded'
            })
          }
          const result= await image.create({imagelink:req.file.filename});
          res.status(200).json({
            message:'image is uploded',
            data:{
                result
            }
          })
     }
     catch(error){
        res.status(404).json({
            message:error
        })
     }
  }
  
module.exports=uploadfile;
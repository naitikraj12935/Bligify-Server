const post=require('../models/post');


const createPOST=async (req,res)=>{
    try{
        const newpost= await post.create(req.body);
        console.log(newpost);
        if(!newpost)
        {
            res.status(404).json({
                status:'fail',
                msg:'invalid content'
            })
        }
        res.status(200).json({
            status:'ok',
            data:{
                newpost
            }
        })
    }
    catch(error){
        res.status(401).json({
            status:'fail',
            msg:'error'
        })

    }
    
}
module.exports={createPOST};
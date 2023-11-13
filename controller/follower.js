const { request } = require("express");
const follow=require('../models/followmodel')
const mongoose=require('mongoose')

const follower=async(req,res)=>{
try{
    const followto=req.body.followto;
    const followby=req.body.followby
    const num= await follow.findOne({followto:followto,followby:followby});
    console.log(num);
    if(!num)
    {
       
         await follow.create(req.body);
         res.status(200).json({
          status:'follow',
          num:1
        })
  
    }
    else{
        await follow.findByIdAndDelete(num._id)
        res.status(200).json({
           status:'unfollow',
           num:-1

        })
      
   
       
    }
}catch(error){
    res.status(500).json({
        status:'fail',
        message:'error'
    })
}
}

const followtoperson=async (req,res)=>{
    try{
        const datato=req.query.followto;
        const followby=await follow.find({followto:datato})
        const followto=await follow.find({followby:datato})
        res.status(200).json({
            status:'ok',
            data:{
                followby,
                followto
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

module.exports={follower,followtoperson};
const mongoose = require("mongoose");
const View = require('../models/viewmodel');
const Like=require('../models/Likemodel')

const getview = async (req, res) => {
    try {
        // Use await to ensure that View.find() returns a promise
        let data = await View.findOne({ id: req.query.id });

        if (!data) {
            // Create a new view document if it doesn't exist
            data = await View.create({ id: req.query.id, numview: 1 });
        } else {
            // If the document exists, increment the view count
            data.numview += 1;
            await data.save();
        }

        res.status(200).json({
            status: 'ok',
            data: {
                view: data.numview
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
}
const getlike=async(req,res)=>{
    try{
      
    let number=await Like.find({postid:req.query.id}).count();
    const num= await Like.findOne({postid:req.query.id,Likeby:req.query.Likeby});
    console.log(num);
    if(!num)
    {
       number=number+1;
         await Like.create({postid:req.query.id,Likeby:req.query.Likeby});
         res.status(200).json({
          status:'like',
          num:1,
          number:number,
        })
  
    }
    else{
        number=number-1;
        await Like.findByIdAndDelete(num._id)
        res.status(200).json({
           status:'dislike',
           num:-1,
           number:number

        })
      
   
    }
}
catch{
    res.status(500).json({
        status:'fail',
       

     })
}

}

module.exports = {getview,getlike}

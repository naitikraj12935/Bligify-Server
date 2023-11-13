const post = require('../models/post');

const Allpost = async (req, res) => {
  try {
    // Get the 'category' route parameter from the request
    console.log(req.query);
    let  category  = req.query.category ;
    let checkcategory={};
    if(category!=='')
    {
        checkcategory={ categories:category };
    }

    const collection = await post.find(checkcategory);

    

    res.status(200).json({
      status: 'ok',
      data: {
        collection,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};
const postdetail = async (req, res) => {
  try {
    // Get the 'category' route parameter from the request
    console.log(req.query);
    

    const collection = await post.findById(req.query.id);

    

    res.status(200).json({
      status: 'ok',
      data: {
        collection,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

const Userpost = async (req, res) => {
  try {
    // Get the 'category' route parameter from the request
    console.log(req.query);
    

    const collection = await post.find({userName:req.query.userName});

    

    res.status(200).json({
      status: 'ok',
      data: {
        collection,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};
const Updatepost=async (req,res)=>{
  console.log(req.body);
  console.log(req.query.id,'hello');
  try{
      const newpost= await post.findByIdAndUpdate(req.query.id,req.body);
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
const Deletepost=async (req,res)=>{
  console.log(req.query);
  try{
      // if(req.user.userName !== req.query.userName)
      // {
      //     res.status(401).json({
      //       msg:'user have not authentication'
      //     })
      // }
      await post.findByIdAndDelete(req.query.id);
      res.status(200).json({
        status:'ok',
        msg:'delted sucess fully'
      })
  }
  catch(error){
    res.status(500).json({
      status:'fail'
    })
  }
}


module.exports = {Allpost,postdetail,Userpost,Updatepost,Deletepost};

const express=require('express');
const {Allpost,postdetail,Userpost,Updatepost,Deletepost}=require('../controller/postController')
const postRoute=express.Router();
const Authenticate=require('../controller/jwtcontroller');
const {getview,getlike}=require('../controller/ViewController');
const {getcomment,postcomment,deletecomment}=require('../controller/Commentcontroller')

postRoute
.route('/allposts')
 .get((req,res,next)=>{
    console.log('i am here')
    next();
 },Allpost);

 postRoute
.route('/details')
 .get((req,res,next)=>{
   console.log('i am post detail')
   next();
},postdetail);

postRoute
.route('/userpost')
.get(Userpost)

postRoute
.route('/update')
.patch(Authenticate,Updatepost)

postRoute
.route('/deletepost')
.delete(Authenticate,Deletepost)

postRoute
.route('/view')
.get(getview)

postRoute
.route('/like')
.get(getlike);

postRoute
.route('/comment')
.get(getcomment)
.post(postcomment)
.delete(deletecomment);

 module.exports=postRoute;


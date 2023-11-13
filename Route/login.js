const express=require('express');
const signupRoute=express.Router();
const {signup,login}=require('../controller/signupcontroller')
const uploadfile =require('../controller/imagecontroller')
const upload=require('../utils/upload')
const Authenticate=require('../controller/jwtcontroller');
const {createPOST}=require('../controller/createcontroller')
signupRoute
.route('/signup')
 .post(signup)

 signupRoute
.route('/login')
 .post(login)

 signupRoute
 .route('/file/upload')
  .post(upload.single('file'),uploadfile);


  signupRoute
  .route('/create')
   .post(Authenticate,createPOST);
 





module.exports=signupRoute;
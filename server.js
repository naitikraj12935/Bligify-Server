const express=require('express');
const connection=require('./Database/db')
const dotenv=require('dotenv');
const app=express();
const signupRoute=require('./Route/login')
const postRoute=require('./Route/postRoute')
const cors = require('cors');
const followRoute = require('./Route/followroute');
dotenv.config();

if(process.env.NODE_ENV === 'production')
{
  app.use(express.static("client/build"));
}
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // For form data
app.use(
    cors({
      origin:'*'// Replace with the allowed origin
      
    })
);
app.use('/blogify',signupRoute);
app.use('/blogify',postRoute);
app.use('/blogify',followRoute)
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log('server is running')
})
connection();
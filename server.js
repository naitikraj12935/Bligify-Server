const express=require('express');
const connection=require('./Database/db')
const dotenv=require('dotenv');
const app=express();
const signupRoute=require('./Route/login')
const postRoute=require('./Route/postRoute')
const cors = require('cors');
const followRoute = require('./Route/followroute');
dotenv.config();



app.use(express.json());
app.use('/images', express.static('public/images'));

app.use(express.urlencoded({ extended: true })); // For form data
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow credentials (cookies, headers) to be sent
};
app.use(
    cors(corsOptions)
);
app.use('/',signupRoute);
app.use('/',postRoute);
app.use('/',followRoute)
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log('server is running')
})
connection();

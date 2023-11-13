const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();

const Authenticate=(req,res,next)=>{
    console.log(req.headers);
    const authheader=req.headers['authorization'];
    const token=authheader && authheader.split(' ')[1];
    if(!token)
    {
        return res.status(401).json({
            msg:'user not exist'
        })
    }
    jwt.verify(token,process.env.ACESS_SECRET_KEY,(error,user)=>{
        if(error)
        {
            return res.status(403).json({
                msg:'invalidtoken'
            })
        }
        req.user=user;
        next();
    })
}
module.exports=Authenticate;
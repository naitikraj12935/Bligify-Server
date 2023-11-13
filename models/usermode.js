const mongooes=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');

const userSchema=new mongooes.Schema({
    name:{
        type:String,
        minlength:[4,'enter a proper large name'],
        maxlength:[12,'enter a proper samll name '],
        required:[true,'enter your name']
        

    },
    userName:{
        type:String,
        minlength:[2,'enter a proper large name'],
        maxlength:[12,'enter a proper samll name '],
        required:[true,'enter your name'],
        unique: true,
        validate: {
            validator: async function (value) {
                const existingUser = await this.constructor.findOne({ userName: value });
                return !existingUser;
            },
            message: 'User name is already taken'
        }
    },
    password:{
        type:String,
        required:[true,'enter a password'],
        minlength: 8
       

    },
    ConfirmPassword:{
        type:String,
        required:[true,'enter a password'],
        validate:{
            validator:function(value){
                return value===this.password
            },
            message:'confirm password and password is not same'
        }
    }

   

})
userSchema.pre('save', async function(next){
    if (!this.isModified('password')) return next();
 
    // Hash the password using bcrypt before saving it
    this.password = await bcrypt.hash(this.password, 12);
    this.ConfirmPassword = undefined; // Clear the passwordConfirm field
  
    next();
})
const User=mongooes.model('user',userSchema);
module.exports=User;
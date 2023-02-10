const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{type:String,required:false},
    lastName:{type:String, required:false},
    email:{type:String,required:true,unique:true},
    userName:{type:String, required:true,unique:true},
    passWord:{type:String, reqired:true,unique:true},
    Img:{type:String, default:''},
},
    {timestamps:true})
module.exports= mongoose.model('User', userSchema)
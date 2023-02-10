const mongoose = require('mongoose')

const catergorySchema = new mongoose.Schema({
    name:{type:String,required:true},
},
{timestamps:true})
module.exports = mongoose.model('Catergory',catergorySchema)
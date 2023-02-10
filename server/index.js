//create express
const express = require('express')
const app = express()
//keep passwords, api keys and sensitive data out code
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
// 
app.use(express.json())
app.use('/images',express.static(path.join(__dirname,'images')))

// indicate router
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const postRoute = require('./routes/post')
const catergoryRoute = require('./routes/catergory')
const multer = require('multer')
//const catergoryRoute = require('./models/Catergory')
// connect to mongoose database
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGO_URL,{}).then(console.log('connected to database'))
.catch((err) => console.log(err))

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"images")
    },filename:(req,file,cb) =>{
        cb(null, req.body.name)
    },
})
const upload = multer({storage:storage})
app.post('/api/upload',upload.single('file'),(req,res)=>{
    res.status(200).json('file has been uploaded')
})

app.use('/api/auth', authRoute)
app.use('/api/user',userRoute)
app.use('/api/post', postRoute)
app.use('/api/catergory', catergoryRoute)

app.listen('5000',()=>{
    console.log('backend is running')
} )
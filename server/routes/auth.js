const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// register 
router.post('/register', async(req,res) =>{
try{

    const salt =  await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.passWord,salt)

    const newUser = User({
        email:req.body.email,
        userName:req.body.userName,
        passWord:hash
    })
    const user = await newUser.save()
    res.status(200).json(user)
    
} catch(err){
    res.status(500).json(err)

}
})

//login
router.post('/login',async(req,res) =>{
    try{
       const user = await User.findOne({userName:req.body.userName})
       !user && res.status(400).json('wrong credentials')

       const validated = await bcrypt.compare(req.body.passWord,user.passWord)
       !validated && res.status(404).json('wrong credwntiala')

       res.status(200).json(user)
    } catch(err){
        res.status(500).json(err)
    }

})


module.exports = router
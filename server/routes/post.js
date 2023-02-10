const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')
const bcrypt = require('bcrypt')
//const { rawListeners } = require('../models/User')
// uodate user
// create post 
router.post('/', async(req,res) =>{
    
    try{
        const userPost = new Post(req.body)
        const savedPost =  await userPost.save()
        res.status(200).json(savedPost)

    } catch(err) {
      res.status(500).json(err)
    }
})

router.put('/:id', async(req,res) =>{
    const post =  await Post.findById(req.params.id)
    try {
        if(post.userName === req.body.userName){
            try{
                const updatePost = await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body
                },{new:true})
                res.status(200).json(updatePost)
            } catch(err) {
                res.status(404).json('can only update your post')
            }
        }

    } catch(err) {
      res.status(500).json(err)
    }
})

router.delete('/:id', async(req,res) => {
    try{
    const post =  await Post.findById(req.params.id)
    if(post.userName === req.body.userName){
        try {
            await post.delete()
            res.status(200).json('post have been deleted')
        } catch(err) {
            res.status(500).json(err)
        }
    } else{
        res.status(500).json('not your account')
    }
} catch(err){
  res.status(500).json(err)
}
})

router.get('/:id', async(req,res)=>{
    
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch {
        res.status(404).json(err)
    }
})

router.get('/', async(req,res) => {
    const userName = req.query.user
    const catName = req.query.cat
    try {
        let posts
        if(userName){
          posts = await Post.find({userName})
        } else if(catName){
            posts = await Post.find({
                catergories: {
                $in:[catName],
            }
        })
        } else{
            posts = await Post.find()
        }
        res.status(200).json(posts)
    } catch(err) {
        res.status(500).json(err)

    }
    
   

})


module.exports = router
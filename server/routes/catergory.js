
const router = require('express').Router()
const Cat = require('../models/Catergory')

    router.post('/', async(req,res) =>{
        const newCat =  new Cat(req.body)
        try{
            const savedCat =  await newCat.save()
            res.status(200).json(savedCat)
        } catch(err){
         res.status(500).json(err)   
    }
})

router.get('/:id', async(req,res) =>{
    try {
        const catID = await Cat.find()
        res.status(200).json(catID)

    } catch {
        res.status(500).json(err)

    }
})
module.exports = router

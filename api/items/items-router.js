const router = require('express').Router()
const Items = require('./items-model');


// add item

router.post('/',function createItem(req,res){
    const newItem = req.body;

    Items.create(newItem)
        .then((items)=>{
            res.status(201).json(newItem)
        })
        .catch((err)=>{
            res.status(400).json({error:err.message})
        })
})
module.exports=router;
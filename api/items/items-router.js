const router = require('express').Router()
const Items = require('./items-model');


// add item

router.get('/',function getAllItems(req,res){
    Items.find()
        .then((items)=>{
            res.status(200).json(items)
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
})

router.get('/:id', function getItemById(req,res){
    const {id} = req.params;
    Items.findById()
        .then((item)=>{
            res.status(200).json(item)
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
})

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
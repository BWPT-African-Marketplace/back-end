const router = require('express').Router()
const { update } = require('../../data/dbConfig');
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
    if(!id){
        res.status(404).json({error:"id not found"})
    }else{
        Items.findById(id)
        .then((item)=>{
            res.status(200).json(item)
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
    }
    
})

router.post('/',function createItem(req,res){
    const newItem = req.body;
    if(!newItem.item_name || !newItem.location_id || !newItem.category_id || !newItem.owner_id){
        res.status(401).json({error:"please include a item name, location id, category id and owner id."})
    }else{
        Items.create(newItem)
        .then((items)=>{
            res.status(201).json(newItem)
        })
        .catch((err)=>{
            res.status(400).json({error:err.message})
        })
    }
})

router.put('/:id', function updateItem(req,res){
    const {id} = req.params;
    const updatedItem = req.body;
    if(!id){
        res.status(404).json({message:"id not found"})
    }else{
        Items.update(id,updatedItem)
        .then((item)=>{
            res.status(200).json(updatedItem)
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
    }
})

router.delete('/:id', function removeItem(req,res){
    const {id} = req.params;
    
    if(!id){
        res.status(404).json({message:"id not found"})
    }else{
        Items.remove(id)
        .then((items)=>{
            res.status(200).jsoon({message:"item deleted."})
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
    }
    
})

module.exports=router;
const router = require('express').Router();

const { json } = require('express');
const Items = require('./items-model');


router.get('/', function getItems(req,res){
    Items.find()
        .then((items)=>{
            res.status(200).json({items})
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
})

module.exports = router;
const Owners = require('./owners-model');
const router = require('express').Router()
const {checkIfLoggedIn} = require('../middleware/restricted');


// ~/api/owners
router.get('/', function getUsers(req,res){
    Owners.find()
        .then((owners)=>{
            res.status(200).json(owners)
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
})

router.get('/:id/items', checkIfLoggedIn,function getOwnerItems(req,res){
    const {id} = req.params;
    Owners.findOwnerItems(id)
        .then((items)=>{
            res.status(200).json(items)
        })
        .catch((err)=>{
            res.status(500).json({error:err.message})
        })
})

module.exports = router;
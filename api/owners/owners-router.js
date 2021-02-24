const Owners = require('./owners-model');
const router = require('express').Router()


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

module.exports = router;
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router()
const Owners = require('../owners/owners-model')
const {isValid} = require('../owners/owners-server');
const secrets = require('../../api/config/secrets')


// register a new owner 

router.post('/register', function createOwner(req,res){
    const credentials = req.body;

    if(isValid(credentials)){
        const rounds = process.env.BCRYPT_ROUNDS || 8;
        const hash = bcryptjs.hashSync(credentials.password,rounds);
        credentials.password =hash;
    }

    if(!credentials.username || !credentials.password){
        res.status(400).json({error:"username and password required"})
    }else{
        Owners.create(credentials)
        .then((owner)=>{
            res.status(201).json({owners})
        })
        .catch((error)=>{
            res.status(500).json({error:"username taken"})
        })
    }

})


//login 

router.post('/login', (req, res) => {
    const {username,password} = req.body;
  
    if(isValid(req.body)){
      Owners.findBy({username: username})
      .then(([owner])=>{
        if(owner && bcryptjs.compareSync(password,owner.password)){
          const token = generateToken(owner);
  
          res.status(200).json({message:`Welcome, ${username}`, token:token})
        }else{
          res.status(401).json({message:"invalid credentials"})
        }
      })
      .catch(error => {
        res.status(500).json({message:error.message })
      })
    }else{
      res.status(400).json({
        message:"username and password required"
      })
    }
    
  });
  

function generateToken(user){
    const payload={
      id:user.id,
      username:user.username,
    }
  
    const options = {
      expiresIn : '1h'
    };
  
    const secret = secrets.jwtSecret
  
    return jwt.sign(payload,secret,options)
  }


module.exports = router;
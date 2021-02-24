const express = require('express');

const server = express();
const OwnersRouter = require('../api/owners/owners-router')

server.use(express.json());
server.use('/api/owners', OwnersRouter);


server.get('/', function isServerUp(req,res){
    res.status(200).json({message:"Welcome to the African Marketplace API."})
})
module.exports = server;
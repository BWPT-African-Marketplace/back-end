const express = require('express');

const server = express();

server.use(express.json());


server.get('/', function isServerUp(req,res){
    res.status(200).json({message:"Welcome to teh African Marketplace API."})
})
module.exports = server;
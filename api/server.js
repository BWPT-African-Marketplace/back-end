const express = require('express');

const server = express();
const AuthRouter = require('../api/auth/auth-routers')
const OwnersRouter = require('../api/owners/owners-router')
const ItemRouter = require('../api/items/items-router')
server.use(express.json());
server.use('/api', AuthRouter);
server.use('/api/owners/items', ItemRouter)
server.use('/api/owners', OwnersRouter);


server.get('/', function isServerUp(req,res){
    res.status(200).json({message:"Welcome to the African Marketplace API."})
})
module.exports = server;
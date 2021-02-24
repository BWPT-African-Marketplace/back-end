const db = require('../../data/dbConfig');


module.exports = {
    find,
    findBy,
    findById
}


async function find(){
    return await db('owners');
}

async function findBy(filter){
    return await db('owners').where( filter );
}

async function findById(id){
    return await db('owners').where({ id })
}
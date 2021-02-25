const db = require('../../data/dbConfig');

module.exports = {
    find,
    create
}

async function find(){
    return await db('items');
}
async function create(item){
    const [id] = await db('items').insert(item);
    return await db('items').where({ id }).first();
}
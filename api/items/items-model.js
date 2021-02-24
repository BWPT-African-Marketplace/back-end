const db = require('../../data/dbConfig');

module.exports = {
    create
}

async function create(item){
    const [id] = await db('items').insert(item);
    return await db('items').where({ id }).first();
}
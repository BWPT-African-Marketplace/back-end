const db = require('../../data/dbConfig');


module.exports = {
    find,
    findById,
    create,
    remove,
    getOwnerItems
}

async function find(){
    return await db('items')
}

async function findById(id){
    return await db('items').where({ id }).first();
}

async function getOwnerItems(){
    return await db('items as i')
        .join('owners as o', 'o.id','i.owner_id')
        .join('locations as l','l.id','i.location_id')
        .select('i.item_name','i.item_description','i.price','l.location_name');
}

async function create(newItem){
    const [id] = await db('items').insert(newItem);
    return findById(id)
}
async function remove(id){
    return null
}